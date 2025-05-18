import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import Card from '../components/Card';

export function FreeFallScreen() {
  const [time, setTime] = useState('');
  const g = 9.8;
  const h = ((g * Math.pow(parseFloat(time) || 0, 2)) / 2).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      <Card title="Queda Livre">
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Tempo (s)"
          value={time}
          onChangeText={setTime}
        />
        <Text>Altura: {h} m</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff6ff',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    borderRadius: 6,
    marginBottom: 16,
  },
});