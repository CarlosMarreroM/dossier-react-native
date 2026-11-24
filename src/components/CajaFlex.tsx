/**
 * Componente CajaFlex (práctica 5).
 * Caja sin altura fija con su propio estado de flex y botones nativos + / − para cambiarlo.
 */
import { useState } from 'react';

import { StyleSheet, Text, View, Button} from 'react-native';

type Props = { nombre: string; bg?: string };

export default function CajaFlex({ nombre, bg = 'green' }: Props) {
    const [valorFlex, setValorFlex] = useState(0);

  return (
    <View style={[styles.caja, { flex: valorFlex, backgroundColor: bg }]}>
      <Text>{nombre} - Flex: {valorFlex}</Text>
      <View style={styles.botones}>
          <Button title="-" onPress={() => setValorFlex(f => Math.max(0, f - 1))} color="black" />
          <Button title="+" onPress={() => setValorFlex(f => f + 1)} color="black" />
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
});