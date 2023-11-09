// SelectedPlayer.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import { Svg, Rect, Circle } from 'react-native-svg';
const SelectedPlayer = ({ route }) => {
    const { player } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  return (
    <ImageBackground
      source={{ uri: player.avatar }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <Text style={styles.playerName}>{player.name}</Text>
        
   <View style={styles.div}>
   <View style={styles.row}>
        <Text style={styles.valueAge}>{player.age}</Text>
          <Text style={styles.valueHeight}>{player.height} </Text>
          <Text style={styles.valueWeight}>{player.weight} </Text>
    </View>
    <View style={styles.row}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.label}>Height</Text>
          <Text style={styles.label}>Weight</Text>
    </View>
   </View>

   <TouchableOpacity
        style={styles.customButton}
        onPress={toggleModal}
      >
        <Text style={styles.buttonText}>{`View ${player.name} stats`}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.name}>OVERVIEW</Text>
            <View style={styles.progressBars}>
              {/* Assists */}
              <Svg height="20" width="100%">
                <Rect width="100%" height="20" fill="#ccc" />
                <Rect
                  width={`${player.technicalScore}%`}
                  height="20"
                  fill="#3498db"
                />
              </Svg>
              <Text style={styles.progressBarLabel}>
                Technical: {player.technicalScore}
              </Text>

              {/* Goals */}
              <Svg height="20" width="100%">
                <Rect width="100%" height="20" fill="#ccc" />
                <Rect
                  width={`${player.tacticalScore}%`}
                  height="20"
                  fill="#e74c3c"
                />
              </Svg>
              <Text style={styles.progressBarLabel}>
                Tactical: {player.tacticalScore}
              </Text>

              <Svg height="20" width="100%">
                <Rect width="100%" height="20" fill="#ccc" />
                <Rect
                  width={`${player.mentalScore}%`}
                  height="20"
                  fill="#Ffa500"
                />
              </Svg>
              <Text style={styles.progressBarLabel}>
                Mental: {player.mentalScore}
              </Text>

              {/* Matches */}
              <Svg height="20" width="100%">
                <Rect width="100%" height="20" fill="#ccc" />
                <Rect
                  width={`${player.physicalScore}%`}
                  height="20"
                  fill="#27ae60"
                />
              </Svg>
              <Text style={styles.progressBarLabel}>
                Physical: {player.physicalScore}
              </Text>
            </View>

            <View style={styles.circularProgressBar}>
              {/* Circular Recovery */}
              <Svg height="100" width="100">
                <Circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#f39c12"
                  strokeWidth="10"
                  fill="transparent"
                />
                <Circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#3498db"
                  strokeWidth="10"
                  strokeDasharray={`100, 100`}  // You can replace with actual values
                  fill="transparent"
                />
              </Svg>
              <Text style={styles.circularProgressBarLabel}>Overall</Text>
              <Text style={styles.circularProgressBarValue}>
                100%  // You can replace with actual values
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.closeButton}
            >
              <Text style={styles.name}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <View style={styles.container}>
    
        <Text style={styles.playerInfo}>Favorite Position: {player.favoritePosition}</Text>
        <Text style={styles.playerInfo}>Recommended Position: {player.recommendedPosition}</Text>
        <Text style={styles.playerInfo}>Assigned Position: {player.assignedPosition}</Text>
        <Text style={styles.playerInfo}>Technical Score: {player.technicalScore}</Text>
        <Text style={styles.playerInfo}>Tactical Score: {player.tacticalScore}</Text>
        <Text style={styles.playerInfo}>Mental Score: {player.mentalScore}</Text>
        <Text style={styles.playerInfo}>Physical Score: {player.physicalScore}</Text>
      </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  playerName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginBottom:'115%',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,  // Padding on the left side
    paddingRight: 10, // Padding on the right side
    paddingTop: 0,   // No padding on the top
    paddingBottom: 0, 
  },
  valueAge: {
    fontSize: 65,
    color: 'white',
    fontFamily: 'Times New Roman',
    paddingLeft: 20,  // Padding on the left side
    paddingRight: 20, // Padding on the right side
    paddingTop: 0,   // No padding on the top
    paddingBottom: 0, 
  },
  valueHeight: {
    fontSize: 65,
    color: 'white',
    fontFamily: 'Times New Roman',
    paddingLeft: 20,  // Padding on the left side
    paddingRight: 20, // Padding on the right side
    paddingTop: 0,   // No padding on the top
    paddingBottom: 0, 
  },
  valueWeight: {
    fontSize: 65,
    color: 'white',
    fontFamily: 'Times New Roman',
    paddingLeft: 20,  // Padding on the left side
    paddingRight: 20, // Padding on the right side
    paddingTop: 0,   // No padding on the top
    paddingBottom: 0, 
  },
  
  playerInfo: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  div:{
    display: 'flex',
    marginBottom: 100,
  },
  customButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15, // Adjust the padding as needed
    borderRadius: 10, // Adjust the border radius as needed
    position: 'absolute',
    bottom: 20,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
});

export default SelectedPlayer;
