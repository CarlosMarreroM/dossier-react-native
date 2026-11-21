# Dossier React Native con Expo – 2.º DAM

**Alumno:** Carlos Marrero Martín
**Módulo:** Programación Multimedia y Dispositivos Móviles

## Cómo ejecutar

1. `npm install`
2. Lanzar en los emuladores (no hace falta abrirlos antes, Expo los arranca):
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Los dos a la vez: `npm run emuladores`

Todas las prácticas se abren desde el índice (`src/app/index.tsx`).

## Estado de las prácticas

| Práctica | Descripción | Estado |
|---|---|---|
| 1 | Hola mundo | ✅ |
| 2 | Contador con dos botones | ✅ |
| 3 | InicioScreen y estilos separados | ✅ |

---

## Práctica 1 – Hola mundo

**Procedimiento:**

1. Limpié la plantilla de Expo para dejar solo la pantalla de inicio en `src/app/index.tsx`.
2. Cambié el texto por `¡Hola mundo! Soy Carlos`, centrado con `justifyContent` y `alignItems`.
3. Moví los estilos a un `StyleSheet` (estilo `pantalla`) con fondo `lightpink`.
4. Configuré ESLint (`eslint.config.js`) y comprobé el código con `npm run lint` y `npx tsc --noEmit`.
5. Lo ejecuté en el emulador de Android y en el simulador de iOS.

**Captura:** ![P1](capturas/p01.png)

**Problemas encontrados:**
Tuve problemas para abrir la app en los emuladores. Lo solucioné ajustando los scripts de `package.json`:

- `"android": "expo start --localhost --android"`
- `"ios": "expo start --localhost --ios"`
- `"emuladores": "expo start --localhost --android --ios"` (nuevo, abre los dos a la vez)

Después de este cambio la app cargó correctamente en el Pixel 9 Pro (Android) y en el iPhone 17 (iOS).

**Estado:** ✅ Terminada

## Práctica 2 – Contador con dos botones

**Procedimiento:**

1. Partí del ejemplo del contador del dossier y lo escribí en `src/app/index.tsx`, con un estado `contador` creado con `useState(0)`.
2. Muestro el valor en un `Text` (`Contador: {contador}`) con tamaño de letra 22.
3. Añadí un segundo `Button` para decrementar. Los dos usan el mismo estado:
   - **Incrementar** (`seagreen`): `setContador(n => n + 1)`
   - **Decrementar** (`crimson`): `setContador(n => n - 1)`
4. Personalicé el contenedor (estilo `caja`) con `StyleSheet.create()`:
   - Borde de 3 de grosor en color `purple` (`borderWidth`, `borderColor`).
   - Fondo lila claro `#f3e8ff` (`backgroundColor`).
   - Esquinas redondeadas con `borderRadius: 16`.
5. Coloqué los botones uno al lado del otro con `flexDirection: 'row'` y `gap: 10` (estilo `botones`), y centré la caja en la pantalla con `flex: 1`, `justifyContent` y `alignItems`.
6. Comprobé el código con `npm run lint` y `npx tsc --noEmit`.
7. Lo ejecuté en el emulador de Android y en el simulador de iOS y comprobé que el contador sube y baja al pulsar cada botón.

**Captura:** ![P2](capturas/p02.png)

**Problemas encontrados:**
Ninguno. La práctica funcionó a la primera en los dos emuladores.

**Estado:** ✅ Terminada

## Práctica 3 – InicioScreen y estilos separados

**Procedimiento:**

1. Creé la carpeta `src/screens/` para guardar las pantallas fuera de `src/app/`, que queda solo para las rutas de Expo Router.
2. Guardé el «Hola mundo» de la práctica 1 en `src/screens/HolaMundoScreen.tsx` para no perderlo.
3. Moví el contador de la práctica 2 a `src/screens/InicioScreen.tsx`, con sus estilos declarados en `StyleSheet.create()` (`pantalla`, `caja`, `texto` y `botones`).
4. Dejé `src/app/index.tsx` solo importando y mostrando la pantalla:

   ```tsx
   import InicioScreen from '../screens/InicioScreen';

   export default function Index() {
     return <InicioScreen />;
   }
   ```

5. Comprobé que no había errores de importación con `npm run lint` y `npx tsc --noEmit`.
6. Lo ejecuté en el emulador de Android y en el simulador de iOS y comprobé que el contador sigue funcionando igual que en la práctica 2.

**Estructura resultante:**

```text
src/
├── app/
│   ├── _layout.tsx
│   └── index.tsx            → muestra <InicioScreen />
└── screens/
    ├── HolaMundoScreen.tsx  → práctica 1
    └── InicioScreen.tsx     → práctica 2 (contador)
```

**Captura:** el resultado visual es el mismo que en la práctica 2 ([captura P2](capturas/p02.png)), porque solo se ha reorganizado el código.

**Problemas encontrados:**
Ninguno.

**Estado:** ✅ Terminada
