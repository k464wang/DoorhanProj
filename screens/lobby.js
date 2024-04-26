import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList,  Modal,
    TouchableWithoutFeedback, Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import DeviceForm from './DeviceForms';
import Header from '../shared/header';

export default function Lobby({ route, navigation }) {
  const [load, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [devices, setDevices] = useState([
  ]);

  // change IP accordingly
  const url = "http://192.168.10.101:8081/addDevice";

  
  const addNewDevice = (device) => {
    console.log(device);
    if (!device) return;
    device.state = 'CLOSED';
    device.key = Math.random().toString();
    console.log(device);
    fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id": device.key,
          "country": route.params[0].country,
          "mail": route.params[0].mail, 
          "password": route.params[0].password,
          "Device": device.title
        }),
    })
    .then(response => response.json())
    .catch(error => console.log(error));
    setDevices((currentDevices) => {
      return [device, ...currentDevices];
    });
    setModalOpen(false);
  };

  const addDevice = (device) => {
    if (!device) return;
    device.state = 'CLOSED';
    device.key = Math.random().toString();
    console.log(device);
    setDevices((currentDevices) => {
      return [device, ...currentDevices];
    });
    setModalOpen(false);
  };

  useEffect(() => {
    const addDev = navigation.addListener('focus', () => {
      if (load) {
        return;
      }
      var i = 0;
      while (route.params[i]){
        console.log(route.params[i].Device);
        addDevice({'title': route.params[i].Device});
        i++;
      }
      setLoaded(true);
    })
    return addDev;
  }, [navigation])

/*
  useEffect(() => {
    const addDev = navigation.addListener('state', () => {
      
      console.log(route.params);
    })
    return addDev;
  }, [navigation])
*/
  useEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress = {() => setModalOpen(true)} style = {{ right : 10}}>
              <Image source={require('../assets/Add.png') } />
            </TouchableOpacity>
        ),
    });
  }, [navigation])




  return (

   
    <View style={styles.container}>
        <Modal visible = {modalOpen} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style = {{flex : 1}}>
                  <View style = {{ backgroundColor: '#EEEEEE', flex: 1}}>
                    <View style = {{marginTop: 0, marginHorizontal: 85 , flex: 1,}}>

                      <Header title={route.params[0].mail} />
                    </View>
                  </View>
                  <MaterialIcons 
                    name='chevron-left'
                    size={24} 
                    style={styles.modalClose} 
                    onPress={() => setModalOpen(false)} 
                  />
                  <View style = {{flex: 11}}>
                    <DeviceForm addDevice={addNewDevice} />
                  </View>
                    
                </View>
            </TouchableWithoutFeedback>
        </Modal>
      <FlatList data={devices} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => /*navigation.navigate('DeviceDetails', item)*/ {} }>
          <Card><View style={styles.device}>
            <View style={styles.deviceDescript}>
                <Image source={require('../assets/Groupdoor.png') } style={styles.logoName}/>
                <Text style={styles.deviceName}>{ item.title }</Text>
            </View>
            <Text style={styles.deviceState}>{ item.state } </Text>
            </View></Card>
        </TouchableOpacity>
      )} />
    </View>
  );
  
}

const styles = StyleSheet.create({
    device: {
      flex : 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 80,
    },
    deviceName:{
        fontFamily: 'inter-semibold',
        fontSize: 12,
        marginTop: 5,
        color: '#003A70',
    },
    deviceState:{
        fontFamily: 'inter-semibold',
        fontSize: 18,
        textAlign: 'right', 
        color: '#003A70',
        //backgroundColor: 'black', 
        flex: 2
    },
    deviceDescript: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#E4E4E4'
    },
    modalClose: {
      flex: 1,
      marginTop: 20,
      marginBottom: 0,
      marginHorizontal: 10
    },
  });