import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlayerCard = ({ player }) => (
  <View style={styles.playerCard}>
    <Image source={{ uri: player.avatar }} style={styles.playerImage} />
    <Text style={styles.playerName}>{player.name}</Text>
  </View>
);

const Team = () => {
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

  return (
    <View style={styles.playersHome}>
      <View style={styles.formation}>
        <View style={styles.goalkeeper}>
          {DATA.map((player) =>
            player.assignedPosition === 'Goalkeeper' ? (
              <PlayerCard key={player.id} player={player} />
            ) : null
          )}
        </View>
        <View style={styles.defenders}>
          {DATA.map((player) =>
            player.assignedPosition === 'Left Fullback' ||
            player.assignedPosition === 'Right Fullback' ||
            player.assignedPosition === 'Centre Back'
              ? <PlayerCard key={player.id} player={player} />
              : null
          )}
        </View>
        <View style={styles.midfielders}>
          {DATA.map((player) =>
            player.assignedPosition === 'Left MF' ||
            player.assignedPosition === 'Centre MF' ||
            player.assignedPosition === 'Right MF'
              ? <PlayerCard key={player.id} player={player} />
              : null
          )}
        </View>
        <View style={styles.forwards}>
          {DATA.map((player) =>
            player.assignedPosition === 'Wing' ||
            player.assignedPosition === 'Centre Forward'
              ? <PlayerCard key={player.id} player={player} />
              : null
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playersHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  formation: {
    flexDirection: 'column',
  },
  goalkeeper: {
    alignItems: 'center',
  },
  defenders: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  midfielders: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  forwards: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  playerCard: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 3
  },
  playerImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  playerName: {
    fontSize: 16,
  },
});

export default Team;
