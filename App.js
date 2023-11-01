// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import EditingScreen from './src/screens/EditingScreen'
import Demo from './src/screens/Demo'
import Tabs from './src/navigation/Tabs';
import MyProfile from './src/screens/MyProfile';
import PlayerHome from './src/screens/PlayerHome';
import PlayerTab from './src/navigation/PlayerTab';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditingScreen" component={EditingScreen} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="PlayerHome" component={PlayerHome} />
        <Stack.Screen name="PlayerTab" component={PlayerTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
