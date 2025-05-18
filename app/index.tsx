import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { CircleScreen } from '../screens/CircleScreen';
import { ComplementaryAngleScreen } from '../screens/ComplementaryAngleScreen';
import { FreeFallScreen } from '../screens/FreeFallScreen';
import { HypotenuseScreen } from '../screens/HypotenuseScreen';
import { MapDistanceScreen } from '../screens/MapDistanceScreen';
import { TrigonometryScreen } from '../screens/TrigonometryScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Trigonometria">
        <Drawer.Screen name="Trigonometria" component={TrigonometryScreen} />
        <Drawer.Screen name="Queda Livre" component={FreeFallScreen} />
        <Drawer.Screen name="Hipotenusa" component={HypotenuseScreen} />
        <Drawer.Screen name="Ângulo Complementar" component={ComplementaryAngleScreen} />
        <Drawer.Screen name="Círculo" component={CircleScreen} />
        <Drawer.Screen name="Mapa e Distância" component={MapDistanceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
