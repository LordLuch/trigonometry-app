import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import Card from '../components/Card';

export function ComplementaryAngleScreen() {
  const [angle, setAngle] = useState('');
  const complement = 90 - parseFloat(angle);

  return (
    <ScrollView style={styles.container}>
      <Card title="Ângulo Complementar">
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ângulo (°)"
          value={angle}
          onChangeText={setAngle}
        />
        <Text>Complementar: {complement}°</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff6ff',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
});
