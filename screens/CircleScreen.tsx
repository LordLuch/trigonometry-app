import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import Card from '../components/Card';

export function CircleScreen() {
  const [radius, setRadius] = useState('');
  const r = parseFloat(radius);
  const area = (Math.PI * r * r).toFixed(2);
  const perimeter = (2 * Math.PI * r * r).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      <Card title="Círculo">
        <TextInput style={styles.input} placeholderTextColor="rgba(0, 0, 0, 0.5)" keyboardType="numeric" placeholder="Raio" value={radius} onChangeText={setRadius} />
        <Text style={styles.text}>Área: {isNaN(parseFloat(area)) ? 0 : area} m²</Text>
        <Text style={styles.text}>Perímetro: {isNaN(parseFloat(perimeter)) ? 0 : perimeter} m</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF6FF',
    padding: 16,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    color: "#000"
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});