import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground } from 'react-native';
import FlatButton from '../shared/button.js';


export default function StartPage( {navigation} ) {
    const pressHandler = () => {
        navigation.navigate('Login');
    }

    return (
        <ImageBackground source={require('../assets/Startbackground.png')} style={styles.container}>
            <Image source={require('../assets/Logo.png') } style={styles.logoName}/>
            <Text style={styles.descript}>
                Добро пожаловать в мобильное приложение DoorHan, чтобы начать 
                пользоваться приложением,
                пожалуйста произведите вход, либо зарегистрируйтесь.
            </Text>
            <FlatButton onPress={pressHandler} text='CONTINUE' buttonColor='white' textColor='#003a70'/>
            <Text style={styles.subtitle}>Made by Kevin</Text>
        <StatusBar style="auto" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top'
  },
  logoName:{
    alignSelf: 'center',
    marginVertical: 150
  },
  descript: { 
    fontFamily : 'inter-semibold', 
    fontSize : 16 , 
    color : 'white',
    textAlign: 'left',
    marginHorizontal: 30,
    marginTop: 120,
    marginBottom: 40
  },
  subtitle:{
    fontFamily : 'inter-medium', 
    fontSize : 14 , 
    color : 'white',
    textAlign: 'center',
    marginTop: 50,
  }
});

