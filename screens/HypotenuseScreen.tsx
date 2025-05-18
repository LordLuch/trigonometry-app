import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import Card from '../components/Card';

export function HypotenuseScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const c = Math.sqrt(Math.pow(parseFloat(a) || 0, 2) + Math.pow(parseFloat(b) || 0, 2)).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      <Card title="Hipotenusa">
        <TextInput
          style={[styles.input, styles.mb2]}
          keyboardType="numeric"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          placeholder="Lado A"
          value={a}
          onChangeText={setA}
        />
        <TextInput
          style={[styles.input, styles.mb4]}
          keyboardType="numeric"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          placeholder="Lado B"
          value={b}
          onChangeText={setB}
        />
        <Text>Hipotenusa: {c}</Text>
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
    color: "#000"
  },
  mb2: {
    marginBottom: 8,
  },
  mb4: {
    marginBottom: 16,
  },
});
