import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Card from '../components/Card';

export function MapDistanceScreen() {
  const pointA = { latitude: -23.55052, longitude: -46.633308 };
  const pointB = { latitude: -23.559616, longitude: -46.658623 };

  const getDistance = (a: { latitude: number; longitude: number }, b: { latitude: number; longitude: number }): string => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(b.latitude - a.latitude);
    const dLon = toRad(b.longitude - a.longitude);
    const lat1 = toRad(a.latitude);
    const lat2 = toRad(b.latitude);
    const aVal =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal));
    return (R * c).toFixed(2);
  };

  return (
    <ScrollView style={styles.container}>
      <Card title="Mapa e Distância">
        <Text>Distância: {getDistance(pointA, pointB)} km</Text>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{ ...pointA, latitudeDelta: 0.02, longitudeDelta: 0.02 }}
        >
          <Marker coordinate={pointA} title="Ponto A" />
          <Marker coordinate={pointB} title="Ponto B" />
        </MapView>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf4ff',
    flex: 1,
  },
  map: {
    height: 300,
    marginTop: 10,
  },
});
