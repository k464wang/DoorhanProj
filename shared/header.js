import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Image source={require('../assets/Chevron-down.png') } style = {styles.chevron}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD4D2',
  },
  headerText: {
    fontFamily: 'inter-bold',
    fontSize: 16,
    color: '#131313',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: -70,
  },
  chevron: {
    left : 10
  },
  add: {
    position: 'absolute',
    left: 260
  }
});