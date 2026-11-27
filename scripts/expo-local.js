/**
 * Arranca Expo en modo --localhost y mantiene el túnel `adb reverse` de los
 * emuladores Android mientras Metro está en marcha.
 *
 * Por qué existe:
 * - Con --localhost la app se descarga de 127.0.0.1:8081, así que funciona en
 *   cualquier red (casa, instituto, sin Wi-Fi) porque no usa la IP del equipo.
 * - El simulador de iOS comparte la red del Mac y llega a 127.0.0.1 sin más.
 * - El emulador Android NO: su 127.0.0.1 es el propio emulador. Necesita
 *   `adb reverse tcp:8081 tcp:8081`. Expo intenta crearlo, pero solo una vez,
 *   con un límite de 2 s y antes de arrancar el emulador, por lo que falla si
 *   el emulador aún no está encendido o si el equipo va cargado (por ejemplo,
 *   al abrir iOS y Android a la vez). Este script lo revisa cada 2 s.
 *
 * Uso: node scripts/expo-local.js [--android] [--ios] [otros flags de expo start]
 * Funciona en macOS, Windows y Linux. Si no hay SDK de Android, solo arranca Expo.
 */
const { execFileSync, spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const args = process.argv.slice(2);
const portFlag = args.indexOf('--port');
const PORT = portFlag !== -1 ? args[portFlag + 1] : '8081';

function findAdb() {
  const exe = process.platform === 'win32' ? 'adb.exe' : 'adb';
  const sdkRoots = [
    process.env.ANDROID_HOME,
    process.env.ANDROID_SDK_ROOT,
    path.join(os.homedir(), 'Library', 'Android', 'sdk'), // macOS
    path.join(os.homedir(), 'Android', 'Sdk'), // Linux
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Android', 'Sdk'), // Windows
  ].filter(Boolean);
  for (const root of sdkRoots) {
    const candidate = path.join(root, 'platform-tools', exe);
    if (fs.existsSync(candidate)) return candidate;
  }
  return exe; // último intento: adb en el PATH
}

const ADB = findAdb();

function adb(...adbArgs) {
  return execFileSync(ADB, adbArgs, { encoding: 'utf8', timeout: 10_000, stdio: ['ignore', 'pipe', 'ignore'] });
}

let adbAvailable = true;
const reversed = new Set();

function syncReverse() {
  if (!adbAvailable) return;
  let devices;
  try {
    devices = adb('devices')
      .split('\n')
      .slice(1)
      .map((line) => line.trim().split(/\s+/))
      .filter(([serial, state]) => serial && state === 'device')
      .map(([serial]) => serial);
  } catch (error) {
    if (error.code === 'ENOENT') adbAvailable = false; // no hay SDK de Android: nada que hacer
    return;
  }
  for (const serial of devices) {
    try {
      if (!adb('-s', serial, 'reverse', '--list').includes(`tcp:${PORT}`)) {
        adb('-s', serial, 'reverse', `tcp:${PORT}`, `tcp:${PORT}`);
      }
      if (!reversed.has(serial)) {
        console.log(`[expo-local] adb reverse tcp:${PORT} listo en ${serial}`);
        reversed.add(serial);
      }
    } catch {
      // El dispositivo aún está arrancando; se reintenta en la siguiente vuelta.
    }
  }
  for (const serial of reversed) if (!devices.includes(serial)) reversed.delete(serial);
}

// Antes de arrancar Expo, para que el túnel exista cuando abra la app.
syncReverse();
const timer = setInterval(syncReverse, 2_000);

const expo = spawn(process.execPath, [require.resolve('expo/bin/cli'), 'start', '--localhost', ...args], {
  stdio: 'inherit',
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => expo.kill(signal));
}

expo.on('exit', (code) => {
  clearInterval(timer);
  process.exit(code ?? 0);
});
