import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Modal,
  PanResponder,
} from 'react-native';
import { Rect, Svg, Circle } from 'react-native-svg'; // Import SVG components
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
const IMAGE_WIDTH = width * 0.7; // Adjusted image size
const IMAGE_HEIGHT = height * 0.4; // Adjusted image size
const SPACING = 20;
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

function Demo() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(50); // Initial value for editing
  const [recoveryValue, setRecoveryValue] = useState(70); // Initial value for recovery
  

  const navigation = useNavigation();
  const closeModal = () => {
    setSelectedItem(null);
  };

  const [technicalValue, setTechnicalValue] = useState(); // Initial value for technical
  const [tacticalValue, setTacticalValue] = useState(); // Initial value for tactical
  const [mentalValue, setMentalValue] = useState(); // Initial value for mental
  const [physicalValue, setPhysicalValue] = useState(); // Initial value for physical

  const [data, setData] = useState(DATA);


  const openEditingScreen = () => {
    closeModal();
    navigation.navigate('EditingScreen', {
      technicalValue: selectedItem.technicalScore,
      tacticalValue: selectedItem.tacticalScore,
      mentalValue: selectedItem.mentalScore,
      physicalValue: selectedItem.physicalScore,
      receiveUpdatedScores, // Pass the callback
    });
  };
  

  const openDetails = (item) => {
    setSelectedItem(item);
    setTechnicalValue(item.technicalScore);
    setTacticalValue(item.tacticalScore);
    setMentalValue(item.mentalScore);
    setPhysicalValue(item.physicalScore);

    
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const doneEditing = () => {
    setIsEditing(false);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (isEditing) {
          // Update the editValue based on the gesture movement
          setEditValue(/* Calculate the new edit value based on gestureState.dx */);
        }
      },
    })
  ).current;
  const receiveUpdatedScores = useCallback((updatedScores) => {
    if (selectedItem) {
      // Update the player's scores in the DATA array
      const updatedData = data.map((item) => {
        if (item.id === selectedItem.id) {
          return {
            ...item,
            technicalScore: updatedScores.technicalValue,
            tacticalScore: updatedScores.tacticalValue,
            mentalScore: updatedScores.mentalValue,
            physicalScore: updatedScores.physicalValue,
          };
        }
        return item;
      });
  
      // Update the DATA array
      setData(updatedData);
    }
  }, [selectedItem, data]);
  
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <Animated.FlatList
          data={DATA}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0],
            });
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [50, 0, 20],
            });

            return (
              <Animated.View
                style={{ width, opacity, transform: [{ translateY }] }}
              >
                <TouchableOpacity onPress={() => openDetails(item)}>
                  <Text style={styles.title}>Player Details</Text>
                  <View style={styles.item}>
                    <Image
                      source={{ uri: item.avatar }}
                      style={styles.avatar}
                    />
                    <View>
                      <Text style={styles.name}>Name: {item.name}</Text>
                      <Text style={styles.info}>Age: {item.age} years old</Text>
                      <Text style={styles.info}>Height: {item.height} cm</Text>
                      <Text style={styles.info}>Weight: {item.weight} kg</Text>
                      <Text style={styles.info}>
                        Favorite Position: {item.favoritePosition}
                      </Text>
                      <Text style={styles.info}>
                        Recommended Position: {item.recommendedPosition}
                      </Text>
                      <Text style={styles.info}>
                        Assigned Position: {item.assignedPosition}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          }}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: true,
            }
          )}
          contentContainerStyle={styles.listContent}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedItem}
        >
          <View style={styles.modalContainer}>
            {selectedItem && (
              <View style={styles.modalContent}>
                <Text style={styles.name}>OVERVIEW</Text>
                <View style={styles.progressBars}>
                  {/* Assists */}
                  <Svg height="20" width="100%">
                    <Rect width="100%" height="20" fill="#ccc" />
                    <Rect
                      width={`${selectedItem.technicalScore}%`}
                      height="20"
                      fill="#3498db"
                    />
                  </Svg>
                  <Text style={styles.progressBarLabel}>
                    Technical: {selectedItem.technicalScore}
                  </Text>

                  {/* Goals */}
                  <Svg height="20" width="100%">
                    <Rect width="100%" height="20" fill="#ccc" />
                    <Rect
                      width={`${selectedItem.tacticalScore}%`}
                      height="20"
                      fill="#e74c3c"
                    />
                  </Svg>
                  <Text style={styles.progressBarLabel}>
                    Tactical: {selectedItem.tacticalScore}
                  </Text>

                  <Svg height="20" width="100%">
                    <Rect width="100%" height="20" fill="#ccc" />
                    <Rect
                      width={`${selectedItem.mentalScore}%`}
                      height="20"
                      fill="#Ffa500"
                    />
                  </Svg>
                  <Text style={styles.progressBarLabel}>
                    Mental: {selectedItem.mentalScore}
                  </Text>

                  {/* Matches */}
                  <Svg height="20" width="100%">
                    <Rect width="100%" height="20" fill="#ccc" />
                    <Rect
                      width={`${selectedItem.physicalScore}%`}
                      height="20"
                      fill="#27ae60"
                    />
                  </Svg>
                  <Text style={styles.progressBarLabel}>
                    Physical: {selectedItem.physicalScore}
                  </Text>
                </View>

                <View style={styles.circularProgressBar}>
                  {/* Circular Recovery */}
                  <Svg height="100" width="100" {...panResponder.panHandlers}>
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
                      strokeDasharray={`${
                        isEditing ? editValue : recoveryValue
                      }, 100`}
                      fill="transparent"
                    />
                  </Svg>
                  <Text style={styles.circularProgressBarLabel}>Overall</Text>
                  <Text style={styles.circularProgressBarValue}>
                    {isEditing ? editValue : recoveryValue}%
                  </Text>
                </View>
              </View>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={openEditingScreen}
                style={styles.doneButton}
              >
                <Text style={styles.doneButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={closeDetails}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    backgroundColor: 'white'
  },
  
  safeAreaView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  listContent: {
    flexGrow: 1,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 30,
    marginLeft: 30,
  },
  avatar: {
    width: IMAGE_WIDTH, // Adjusted image width
    height: IMAGE_HEIGHT, // Adjusted image height
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 16,
    color: '#888',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20, // Add border radius to top left corner
    borderTopRightRadius: 20,
  },
  progressBars: {
    marginVertical: 20,
  },
  progressBarLabel: {
    fontSize: 16,
    marginVertical: 5,
  },
  circularProgressBar: {
    alignItems: 'center',
  },
  circularProgressBarLabel: {
    fontSize: 16,
    marginVertical: 10,
  },
  circularProgressBarValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doneButton: {
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
  doneButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Demo;
