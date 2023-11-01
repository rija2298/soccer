// MyProfile.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const playerId = '1';
const DATA = [
  {
    id: '1',
    name: 'John Albert',
    age: 25,
    avatar: 'https://th.bing.com/th/id/OIP.XtxdqAeCF-jgOhXRHGg09QHaLG?pid=ImgDet&rs=1',
    height: 180, // Height in centimeters
    weight: 75,  // Weight in kilograms
    favoritePosition: 'Midfield',
    recommendedPosition: 'Midfield',
    assignedPosition: 'Centre Forward',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '2',
    name: 'Robbert Josh',
    age: 22,
    avatar: 'https://thumbs.dreamstime.com/b/football-player-7884051.jpg',
    height: 175,
    weight: 70,
    favoritePosition: 'Defender',
    recommendedPosition: 'Defender',
    assignedPosition: 'Wing',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '3',
    name: 'Santa Frost',
    age: 28,
    avatar: 'https://cdn.shopify.com/s/files/1/1038/1798/products/football-player-posing-psd_6077cb59ab5f7.jpg?v=1647876529&width=600',
    height: 185,
    weight: 80,
    favoritePosition: 'Midfield',
    recommendedPosition: 'Midfield',
    assignedPosition: 'Wing',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '4',
    name: 'Alice Smith',
    age: 30,
    avatar: 'https://thumbs.dreamstime.com/b/soccer-player-doing-kick-ball-football-stadium-field-isolated-black-background-42360850.jpg',
    height: 178,
    weight: 72,
    favoritePosition: 'Forward',
    recommendedPosition: 'Forward',
    assignedPosition: 'Right MF',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '5',
    name: 'Bob Johnson',
    age: 24,
    avatar: 'https://th.bing.com/th/id/OIP.qTJHNAvXwWZ-9iEqrIcKZAHaKw?pid=ImgDet&rs=1',
    height: 182,
    weight: 76,
    favoritePosition: 'Goalkeeper',
    recommendedPosition: 'Goalkeeper',
    assignedPosition: 'Centre MF',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '6',
    name: 'John Albert',
    age: 25,
    avatar: 'https://th.bing.com/th/id/OIP.XtxdqAeCF-jgOhXRHGg09QHaLG?pid=ImgDet&rs=1',
    height: 180,
    weight: 75,
    favoritePosition: 'Midfield',
    recommendedPosition: 'Midfield',
    assignedPosition: 'Left MF',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '7',
    name: 'Robbert Josh',
    age: 22,
    avatar: 'https://thumbs.dreamstime.com/b/football-player-7884051.jpg',
    height: 175,
    weight: 70,
    favoritePosition: 'Defender',
    recommendedPosition: 'Defender',
    assignedPosition: 'Centre Back',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '8',
    name: 'Santa Frost',
    age: 28,
    avatar: 'https://cdn.shopify.com/s/files/1/1038/1798/products/football-player-posing-psd_6077cb59ab5f7.jpg?v=1647876529&width=600',
    height: 185,
    weight: 80,
    favoritePosition: 'Midfield',
    recommendedPosition: 'Midfield',
    assignedPosition: 'Centre Back',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '9',
    name: 'Alice Smith',
    age: 30,
    avatar: 'https://thumbs.dreamstime.com/b/soccer-player-doing-kick-ball-football-stadium-field-isolated-black-background-42360850.jpg',
    height: 178,
    weight: 72,
    favoritePosition: 'Forward',
    recommendedPosition: 'Forward',
    assignedPosition: 'Right Fullback',
    technicalScore: 70, // Technical score (update with actual data)
    tacticalScore: 80, // Tactical score (update with actual data)
    mentalScore: 60, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '10',
    name: 'Bob Johnson',
    age: 24,
    avatar: 'https://th.bing.com/th/id/OIP.qTJHNAvXwWZ-9iEqrIcKZAHaKw?pid=ImgDet&rs=1',
    height: 182,
    weight: 76,
    favoritePosition: 'Goalkeeper',
    recommendedPosition: 'Goalkeeper',
    assignedPosition: 'Left Fullback',
    technicalScore: 7, // Technical score (update with actual data)
    tacticalScore: 8, // Tactical score (update with actual data)
    mentalScore: 6, // Mental score (update with actual data)
    physicalScore: 75,
  },
  {
    id: '11',
    name: 'Bob Johnson',
    age: 24,
    avatar: 'https://th.bing.com/th/id/OIP.qTJHNAvXwWZ-9iEqrIcKZAHaKw?pid=ImgDet&rs=1',
    height: 182,
    weight: 76,
    favoritePosition: 'Goalkeeper',
    recommendedPosition: 'Goalkeeper',
    assignedPosition: 'Goalkeeper',
    technicalScore: 7, // Technical score (update with actual data)
    tacticalScore: 8, // Tactical score (update with actual data)
    mentalScore: 6, // Mental score (update with actual data)
    physicalScore: 75,
  },
  // Add more data entries as needed
];
const MyProfile = ({ route }) => {
  // Find the player's profile based on the provided playerId
  const player = DATA.find((item) => item.id === playerId);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: player.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.info}>Age: {player.age} years old</Text>
      <Text style={styles.info}>Height: {player.height} cm</Text>
      <Text style={styles.info}>Weight: {player.weight} kg</Text>
      <Text style={styles.info}>Favorite Position: {player.favoritePosition}</Text>
      <Text style={styles.info}>Recommended Position: {player.recommendedPosition}</Text>
      <Text style={styles.info}>Assigned Position: {player.assignedPosition}</Text>
      <Text style={styles.info}>Technical Score: {player.technicalScore}</Text>
      <Text style={styles.info}>Tactical Score: {player.tacticalScore}</Text>
      <Text style={styles.info}>Mental Score: {player.mentalScore}</Text>
      <Text style={styles.info}>Physical Score: {player.physicalScore}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default MyProfile;
