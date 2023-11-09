// PlayerHome.js

import React from 'react';
import { View, Text, Button, StyleSheet , ImageBackground} from 'react-native';
import Demo from './Demo';
import PlayerTab from '../navigation/PlayerTab';

const PlayerHome = ({ navigation }) => {
  return (
       <PlayerTab/>
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

export default PlayerHome;
