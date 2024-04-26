import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';
import { center } from '@shopify/react-native-skia';


const reviewSchema = yup.object({
    title: yup.string()
      .required()
      .min(4),
  });

export default function DeviceForm( { addDevice } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}> Connecting device </Text>
            <Text style={styles.text2} > Name your Device </Text>
            <Formik
                initialValues={{ title: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.resetForm(); 
                    addDevice(values);
                }}>
                
                {props => (
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder='device name'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        />

                        <View style={{ marginTop: 400}}>
                            <FlatButton onPress={props.handleSubmit} text='Next' buttonColor= '#003a70' textColor='white'/>
                        </View>
                    </View>
                    )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
    },
    text1:{
        flex: 1,
        fontFamily: 'inter-regular',
        textAlign: 'center',
        fontSize: 16
    },
    text2:{
        flex: 1,
        fontFamily: 'inter-bold',
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        backgroundColor: '#D7D2D0',
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 4,
        textAlign: 'center'
      },
  });
