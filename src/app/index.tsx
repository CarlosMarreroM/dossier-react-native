/**
 * Ruta principal de la app (src/app/index.tsx).
 * Solo muestra la pantalla de la práctica en curso; se cambia en cada práctica.
 * Ahora muestra EstilosScreen (práctica 7).
 */
import EstilosScreen from '../screens/EstilosScreen';

export default function Index() {
  return <EstilosScreen />;
}