/**
 * Práctica 8 · Círculos dinámicos
 * Añade círculos de color variable a un escenario y alterna flexWrap (wrap/nowrap)
 * y flexDirection (row/column) para ver cómo se colocan.
 */
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BotonControl from '../components/BotonControl';

export default function CirculosScreen() {
  const [colores, setColores] = useState<string[]>([]);
  const [enFila, setEnFila] = useState(true);
  const [conWrap, setConWrap] = useState(false);

  function anadirCirculo() {
    const n = colores.length;
    const r = Math.min(255, n * 20);       // el rojo sube con cada círculo, como máximo 255
    const g = 80;
    const b = Math.min(255, 120 + n * 10); // el azul también sube, como máximo 255
    setColores(actual => [...actual, `rgb(${r}, ${g}, ${b})`]);
  }

  return (
    <SafeAreaView style={styles.pantalla}>
      <Text style={styles.titulo}>Práctica 8 · Círculos ({colores.length})</Text>

      <View style={styles.controles}>
        <BotonControl titulo="Añadir círculo" onPress={anadirCirculo} />
        <BotonControl titulo={conWrap ? 'wrap' : 'nowrap'} onPress={() => setConWrap(v => !v)} />
        <BotonControl titulo={enFila ? 'row' : 'column'} onPress={() => setEnFila(v => !v)} />
        <BotonControl titulo="Vaciar" onPress={() => setColores([])} />
      </View>

      <View
        style={[
          styles.escenario,
          {
            flexDirection: enFila ? 'row' : 'column',
            flexWrap: conWrap ? 'wrap' : 'nowrap',
          },
        ]}
      >
        {colores.map((color, index) => (
          <View key={index} style={[styles.circulo, { backgroundColor: color }]} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#b9b9b9',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
  controles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  escenario: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    padding: 10,
    gap: 8,
  },
  circulo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});