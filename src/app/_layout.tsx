import { Stack } from "expo-router";

export default function RootLayout() {
  // Sin cabecera nativa: en iOS 26 es transparente y tapa (y bloquea) lo que hay debajo.
  return <Stack screenOptions={{ headerShown: false }} />;
}
