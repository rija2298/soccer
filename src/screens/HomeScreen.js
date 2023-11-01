// HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Demo from './Demo';
import Tabs from '../navigation/Tabs';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Implement logout logic here if needed
    navigation.navigate('Login');
  };

  return (
       <Tabs/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
});

export default HomeScreen;
