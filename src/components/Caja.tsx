// src/components/Caja.tsx
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