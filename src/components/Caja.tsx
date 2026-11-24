/**
 * Componente Caja (práctica 4, ampliado en la práctica 7).
 * Caja de 100 × 100 que muestra un nombre y un color de fondo (`bg`, verde por defecto).
 * P7: prop opcional `style` que se aplica al final y puede sobrescribir el estilo base.
 */
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';

type Props = { 
  nombre: string; 
  bg?: string 
  style?: StyleProp<ViewStyle>;
};

export default function Caja({ nombre, bg = 'green', style }: Props) {
  return (
    <View style={[styles.caja, { backgroundColor: bg }, style]}>
      <Text>{nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});