import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.pantalla}>
      <View style={styles.caja}>
        <Text style={styles.texto}>Contador: {contador}</Text>

        <View style={styles.botones}>
          <Button title="Decrementar" onPress={() => setContador(n => n - 1)} color="crimson" />
          <Button title="Incrementar" onPress={() => setContador(n => n + 1)} color="seagreen" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,                    // ocupa toda la pantalla
    justifyContent: 'center',   // centra en vertical
    alignItems: 'center',       // centra en horizontal
  },
  caja: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 3,
    borderColor: 'purple',      
    backgroundColor: '#f3e8ff', // ← color de fondo 
    borderRadius: 16,           // ← esquinas redondeadas
  },
  texto: {
    fontSize: 22,
    marginBottom: 12,
  },
  botones: {
    flexDirection: 'row',       // pone los botones uno al lado del otro
    gap: 10,
  },
});