import React from 'react';
import * as ReactNative from 'react-native';
import * as FonteMontserrat from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

const App = () => {
  const [fonteCarregada] = FonteMontserrat.useFonts({
    "MontserratRegular": FonteMontserrat.Montserrat_400Regular,
    "MontserratRegularItalic": FonteMontserrat.Montserrat_400Regular_Italic,
    "MontserratBold": FonteMontserrat.Montserrat_700Bold,
  });

  if (!fonteCarregada) return <AppLoading />;

  return (
    <ReactNative.SafeAreaView>
      <ReactNative.StatusBar style="auto" />

      <Cesta {...mock} />
    </ReactNative.SafeAreaView>
  );
};

export default App;
