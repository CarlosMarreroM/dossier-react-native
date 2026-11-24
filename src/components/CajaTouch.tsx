/**
 * Componente CajaTouch (práctica 6).
 * Versión de CajaFlex con TouchableOpacity (−) y TouchableHighlight (+, con alerta).
 * El botón − se desactiva y se pone gris cuando flex vale 0.
 */
import { useState } from 'react';

import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Alert} from 'react-native';

type Props = { nombre: string; bg?: string };

export default function CajaTouch({ nombre, bg = 'green' }: Props) {
  const [valorFlex, setValorFlex] = useState(0);
  const desactivado = valorFlex === 0;

  return (
    <View style={[styles.caja, { flex: valorFlex, backgroundColor: bg }]}>
      <Text>{nombre} - Flex: {valorFlex}</Text>
      <View style={styles.botones}>
          <TouchableOpacity 
            onPress={() => setValorFlex(f => Math.max(0, f - 1))} 
            disabled={desactivado} // Deshabilitar el botón si valorFlex es 0
            style={[styles.boton, desactivado && styles.botonDesactivado]}
          >
            <Text style={[styles.textoBoton, desactivado && styles.textoDesactivado]}>-</Text>
          </TouchableOpacity>

          <TouchableHighlight 
            onPress={() => {
              Alert.alert('Flex aumentado', `${nombre} pasa a flex ${valorFlex + 1}`);
              setValorFlex(f => f + 1)
            }}
            underlayColor="#ddd"
            style={styles.boton}
          >
            <Text style={styles.textoBoton}>+</Text>
          </TouchableHighlight>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    justifyContent: 'center', 
    alignItems: 'center' ,
    padding: 10,
  },
  botones: {
    flexDirection: 'row', 
    gap: 10,
  },
  boton: {
    backgroundColor: '#000000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonDesactivado: {
    backgroundColor: '#9e9e9e',
  },
  textoDesactivado: {
    color: '#e0e0e0',
  },
});