/**
 * Componente BotonControl (práctica 8).
 * Botón personalizado con TouchableOpacity, reutilizable en varias pantallas.
 * Recibe el texto (`titulo`) y la función que se ejecuta al pulsar (`onPress`).
 */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  titulo: string;
  onPress: () => void;
};

export default function BotonControl({ titulo, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress} activeOpacity={0.6}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#222',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  texto: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});