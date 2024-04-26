import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './routes/drawer'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './screens/login';

const getFonts = () => {
  return Font.loadAsync({
    'inter-medium' : require('./assets/fonts/Inter-Medium.ttf'),
    'inter-bold' : require('./assets/fonts/Inter-Bold.ttf'),
    'inter-semibold' : require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-regular' : require('./assets/fonts/Inter-Regular.ttf'),
    
  })
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded){
    return (
     <Navigator /> 
     
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
