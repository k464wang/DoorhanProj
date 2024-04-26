import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress, buttonColor, textColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={ {...styles.button, backgroundColor: buttonColor} }>
        <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 14,
    marginHorizontal: 30
  },
  buttonText: {
    fontFamily: 'inter-bold',
    fontSize: 16,
    textAlign: 'center',
  }
});