/**
 * Práctica 5 · Modificar flex dinámicamente
 * Escenario con tres CajaFlex que se reparten el espacio según su valor de flex.
 */
import { StyleSheet, Text, View } from 'react-native';
import CajaFlex from '../components/CajaFlex';

export default function FlexScreen() {
  return (
    <View style={styles.pantalla}>
        <Text style={styles.texto}>Práctica 5 · Reparto con flex </Text>
        <View style={styles.escenario}>
            <CajaFlex nombre="Caja A" bg="brown" />
            <CajaFlex nombre="Caja B" bg="purple" />
            <CajaFlex nombre="Caja C" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,                    // ocupa toda la pantalla
    backgroundColor: '#b9b9b9',
    padding: 20,
  },
  escenario: {
    flex: 1,     
    backgroundColor: '#fbfbfb', // ← color de fondo 
    gap: 10,
    padding: 10,
  },
  texto: {
    fontSize: 22,
    marginBottom: 12,
    textAlign: 'center',
    color: 'yellow'
  },

});