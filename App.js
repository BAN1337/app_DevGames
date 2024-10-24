import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#050B18' barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );
}