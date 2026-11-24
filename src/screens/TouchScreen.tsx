import { StyleSheet, Text, View } from 'react-native';
import CajaTouch from '../components/CajaTouch';

export default function TouchScreen() {
  return (
    <View style={styles.pantalla}>
        <Text style={styles.texto}>Práctica 6 · Botones </Text>
        <View style={styles.escenario}>
            <CajaTouch nombre="Caja A" bg="brown" />
            <CajaTouch nombre="Caja B" bg="purple" />
            <CajaTouch nombre="Caja C" />
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