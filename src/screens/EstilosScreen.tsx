import { StyleSheet, Text, View } from 'react-native';
import Caja from '../components/Caja';

export default function EstilosScreen() {
  return (
    <View style={styles.pantalla}>
        <Text style={styles.texto}>Práctica 7 · Estilos</Text>
        <View style={styles.escenario}>
            <Caja nombre="Caja A" bg="brown" style={{borderRadius: 20}} />
            <Caja nombre="Caja B" bg="purple" style={{ borderRadius: 20, borderWidth: 5, borderColor: 'silver' }} />
            <Caja nombre="Caja C" />
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