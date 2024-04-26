import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Form, Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';
import * as yup from 'yup';
import FlatButton from '../shared/button';


const reviewSchema = yup.object({
    country: yup
        .string()
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, 'Only alphabetic characters allowed')
        .required('Country is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
     .required('Password is required'),

  });

export default function Login( {navigation} ) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 

    // change IP accordingly
    const url = "http://192.168.10.101:8081/login";


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                
                <Text style={styles.title} > Login </Text>
                <Formik
                    initialValues={{ country: '', email: '', password: ''}}
                    validationSchema={reviewSchema}
                    onSubmit={ async (values, {setStatus} ) => {

                        const { country, email, password} = values;
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "country": country,
                                "mail": email,
                                "password": password
                            }),
                        })
                        .then(response => response.json())
                        .then(result => {
                            console.log(result[0]);
                            if (result === "Failure"){
                                return setStatus(result);
                            } else {
                                navigation.navigate("LobbyStack", {
                                    screen: 'Lobby',
                                    params: result
                                });
                            }
                        })
                        .catch(error => console.log(error));
                    }}>
                    
                    {props => (
                        <View>
                            <View style={styles.box}>
                                <TextInput
                                style={styles.input}
                                placeholder='e.g. Canada'
                                onChangeText={props.handleChange('country')}
                                value={props.values.title}
                                onBlur={props.handleBlur('country')}
                                />
                            </View>
                            
                            <Text style={styles.errorText}> { props.touched.country && props.errors.country} </Text>
                            
                            <View style={styles.box}>
                                <TextInput
                                style={styles.input}
                                placeholder='username@gmail.com'
                                onChangeText={props.handleChange('email')}
                                value={props.values.title}
                                onBlur={props.handleBlur('email')}
                                />
                            </View>
                            
                            <Text style={styles.errorText}> { props.touched.email && props.errors.email} </Text>
                            
                            <View style={styles.box}>
                                <TextInput
                                secureTextEntry= {!showPassword}
                                style={styles.input}
                                placeholder='Password'
                                onChangeText={props.handleChange('password')}
                                value={props.values.title}
                                onBlur={props.handleBlur('password')}
                                />
                                <MaterialIcons 
                                    name={showPassword ? 'visibility-off' : 'visibility'} 
                                    size={24} 
                                    color="#003A70"
                                    style={styles.icon} 
                                    onPress={toggleShowPassword} 
                                /> 
                            </View>
                            
                            <Text style={styles.errorText}> { props.touched.password && props.errors.password} </Text>
                            <Text>{props.status}</Text>
                            <View style={{ marginTop: 400}}>
                                <FlatButton onPress={props.handleSubmit} text='Next' buttonColor= '#003a70' textColor='white'/>
                            </View>
                        </View>
                        )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#E4E4E4',
    },
    title:{
        flex: 1,
        fontFamily: 'inter-bold',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 70
    },
    box: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        borderRadius: 8, 
        paddingHorizontal: 14, 
    },
    input: {
        /*backgroundColor: 'white',
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 15,
        textAlign: 'center',*/
        flex: 1, 
        color: '#333', 
        paddingVertical: 10, 
        paddingRight: 10, 
        fontSize: 16, 
      },
    icon: { 
        marginLeft: 10, 
    }, 
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,

    },
  });
