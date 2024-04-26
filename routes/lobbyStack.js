import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Lobby from '../screens/lobby';
import DeviceForm from '../screens/DeviceForms'
import { Image, TouchableOpacity } from 'react-native';

/*
const screens = {
  Lobby: {
    screen: Lobby,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='User&#8217; house' navigation={navigation} />
      }
    },
  },
};
*/

// home stack navigator screens
const lobbyStack = createStackNavigator();

function LobbyStack(  ) {
  return (
    <lobbyStack.Navigator  initialRouteName="Lobby">
      <lobbyStack.Screen name="Lobby"
        component={Lobby}
        options={{
          headerTitleAlign: 'center',
          headerStyle: { height: 82 , backgroundColor: '#EEEEEE'},
          headerLeft: () => <Image source={require('../assets/Icon.png') } style={{ left : 10 }}/>,
          headerTitle: () => <Header title='User'/>,
          headerRight: () =>  
            <TouchableOpacity style = {{ right : 10}}>
              <Image source={require('../assets/Add.png') } />
            </TouchableOpacity>
        }} />
      
    </lobbyStack.Navigator>
  );
}


export default LobbyStack;