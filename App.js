import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Cesta from './src/telas/cesta';

const App = () => {
  return (
    <View>
      <Cesta />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
