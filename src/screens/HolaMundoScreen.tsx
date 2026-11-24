/**
 * Práctica 1 · Hola mundo
 * Pantalla con un texto centrado sobre fondo rosa.
 * Se movió aquí desde index.tsx en la práctica 3 para no perderla.
 */
import { StyleSheet, Text, View } from 'react-native';

export default function HolaMundoScreen() {
  return (
    <View style={styles.pantalla}>
      <Text>¡Hola mundo! Soy Carlos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    alignItems: 'center',
    backgroundColor: 'lightpink',
    flex: 1,
    justifyContent: 'center',
  },
});