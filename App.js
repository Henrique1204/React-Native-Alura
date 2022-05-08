import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import Cesta from './src/telas/Cesta';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <Cesta />
    </SafeAreaView>
  );
};

export default App;
