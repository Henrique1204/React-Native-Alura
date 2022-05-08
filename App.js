import React from 'react';
import * as ReactNative from 'react-native';
import * as FonteMontserrat from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';

const App = () => {
  const [fonteCarregada] = FonteMontserrat.useFonts({
    "MontserratRegular": FonteMontserrat.Montserrat_400Regular,
    "MontserratRegularItalic": FonteMontserrat.Montserrat_400Regular_Italic,
    "MontserratBold": FonteMontserrat.Montserrat_700Bold,
  });

  if (!fonteCarregada) return <ReactNative.View />;

  return (
    <ReactNative.SafeAreaView>
      <ReactNative.StatusBar style="auto" />

      <Cesta />
    </ReactNative.SafeAreaView>
  );
};

export default App;
