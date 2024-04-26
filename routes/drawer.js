import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login';


// stacks
import LobbyStack from './lobbyStack';
import StartPage from '../screens/startpage';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator();

export default function RootDrawer() {
    return (
        <NavigationContainer>
            <RootDrawerNavigator.Navigator initialRouteName="Startpage" screenOptions={{headerShown : false}}>
                <RootDrawerNavigator.Screen
                name="Startpage"
                component={StartPage}
                />
                <RootDrawerNavigator.Screen
                name="Login"
                component={Login}
                />
                <RootDrawerNavigator.Screen
                name="LobbyStack"
                component={LobbyStack}
                />
            </RootDrawerNavigator.Navigator>
        </NavigationContainer>
      
    );
  }
