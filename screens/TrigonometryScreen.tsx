import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import Card from '../components/Card';

export function TrigonometryScreen() {
  const [angle, setAngle] = useState('');
  const rad = parseFloat(angle) * (Math.PI / 180);
  const sin = isNaN(rad) ? '' : Math.sin(rad).toFixed(4);
  const cos = isNaN(rad) ? '' : Math.cos(rad).toFixed(4);
  const tan = isNaN(rad) ? '' : Math.tan(rad).toFixed(4);

  return (
    <ScrollView style={styles.container}>
      <Card title="Trigonometria">
        <TextInput
          style={styles.input}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="numeric"
          placeholder="Ângulo (°)"
          value={angle}
          onChangeText={setAngle}
        />
        <Text>Seno: {sin}</Text>
        <Text>Cosseno: {cos}</Text>
        <Text>Tangente: {tan}</Text>
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
    borderColor: '#d1d5db',
    padding: 8,
    borderRadius: 6,
    marginBottom: 16,
    color: "#000"
  },
});
