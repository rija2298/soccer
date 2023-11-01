import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function EditingScreen({ route, navigation }) {
  const [subCategoryValues, setSubCategoryValues] = useState({
    dribblingValue: 0,
    passingValue: 0,
    receivingValue: 0,
    shootingValue: 0,
    headingValue: 0,
    tacklingValue: 0,
  });
  const { technicalValue, tacticalValue, mentalValue, physicalValue, receiveUpdatedScores } = route.params;

  const [mainCategoryValues, setMainCategoryValues] = useState({
    technicalValue: 0,
    tacticalValue: 0,
    mentalValue: 0,
    physicalValue: 0,
  });

  const [currentCategory, setCurrentCategory] = useState('Technical');

  const calculateTechnical = () => {
    const {
      dribblingValue,
      passingValue,
      receivingValue,
      shootingValue,
      headingValue,
      tacklingValue,
    } = subCategoryValues;

    const newTechnicalValue =
      (dribblingValue + passingValue + receivingValue + shootingValue + headingValue + tacklingValue) / 6;

    setMainCategoryValues({ ...mainCategoryValues, technicalValue: newTechnicalValue });

    // Clear the subcategory values for the next category
    setSubCategoryValues({
      dribblingValue: 0,
      passingValue: 0,
      receivingValue: 0,
      shootingValue: 0,
      headingValue: 0,
      tacklingValue: 0,
    });
  };

  const calculateTactical = () => {
    const {
      dribblingValue,
      passingValue,
      receivingValue,
      shootingValue,
      headingValue,
      tacklingValue,
    } = subCategoryValues;

    const newTacticalValue =
      (dribblingValue + passingValue + receivingValue + shootingValue + headingValue + tacklingValue) / 6;

    setMainCategoryValues({ ...mainCategoryValues, tacticalValue: newTacticalValue });

    // Clear the subcategory values for the next category
    setSubCategoryValues({
      dribblingValue: 0,
      passingValue: 0,
      receivingValue: 0,
      shootingValue: 0,
      headingValue: 0,
      tacklingValue: 0,
    });
  };

  const calculateMental = () => {
    const {
      dribblingValue,
      passingValue,
      receivingValue,
      shootingValue,
      headingValue,
      tacklingValue,
    } = subCategoryValues;

    const newMentalValue =
      (dribblingValue + passingValue + receivingValue + shootingValue + headingValue + tacklingValue) / 6;

    setMainCategoryValues({ ...mainCategoryValues, mentalValue: newMentalValue });

    // Clear the subcategory values for the next category
    setSubCategoryValues({
      dribblingValue: 0,
      passingValue: 0,
      receivingValue: 0,
      shootingValue: 0,
      headingValue: 0,
      tacklingValue: 0,
    });
  };

  const calculatePhysical = () => {
    const {
      dribblingValue,
      passingValue,
      receivingValue,
      shootingValue,
      headingValue,
      tacklingValue,
    } = subCategoryValues;

    const newPhysicalValue =
      (dribblingValue + passingValue + receivingValue + shootingValue + headingValue + tacklingValue) / 6;

    setMainCategoryValues({ ...mainCategoryValues, physicalValue: newPhysicalValue });

    // Clear the subcategory values for the next category
    setSubCategoryValues({
      dribblingValue: 0,
      passingValue: 0,
      receivingValue: 0,
      shootingValue: 0,
      headingValue: 0,
      tacklingValue: 0,
    });

    // After calculating the Physical category, navigate back to the demo screen
    navigation.navigate('Demo', mainCategoryValues);
  };

  const navigateToNextCategory = (nextCategory) => {
    setCurrentCategory(nextCategory);
  };

  const saveChanges = () => {
    // Pass the calculated main category scores back to the "Demo" screen
    navigation.navigate('Demo', mainCategoryValues);
  };

  const renderInputFields = () => {
    const subCategories = [
      'Dribbling',
      'Passing',
      'Receiving',
      'Shooting',
      'Heading',
      'Tackling',
    ];

    return subCategories.map((subCategory) => {
      return (
        <View key={subCategory}>
          <Text>Edit {subCategory} Value:</Text>
          <TextInput
            style={styles.input}
            value={subCategoryValues[`${subCategory.toLowerCase()}Value`].toString()}
            onChangeText={(text) => {
              setSubCategoryValues({
                ...subCategoryValues,
                [`${subCategory.toLowerCase()}Value`]: parseFloat(text),
              });
            }}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text>Technical: {mainCategoryValues.technicalValue}</Text>
      <Text>Tactical: {mainCategoryValues.tacticalValue}</Text>
      <Text>Mental: {mainCategoryValues.mentalValue}</Text>
      <Text>Physical: {mainCategoryValues.physicalValue}</Text>
      <View style={styles.horizontalLine} />
      <Text>{currentCategory}:</Text>
      {renderInputFields()}
      <Button
        title={`Calculate ${currentCategory} Category`}
        onPress={() => {
          switch (currentCategory) {
            case 'Technical':
              calculateTechnical();
              navigateToNextCategory('Tactical');
              break;
            case 'Tactical':
              calculateTactical();
              navigateToNextCategory('Mental');
              break;
            case 'Mental':
              calculateMental();
              navigateToNextCategory('Physical');
              break;
            case 'Physical':
              calculatePhysical();
              break;
          }
        }}
      />
        <Button
        title="Saved Changes"
        onPress={() => {
        // Collect updated scores here
  const updatedScores = {
    technicalValue: technicalValue, // Replace with your actual updated technical value variable
    tacticalValue: tacticalValue, // Replace with your actual updated tactical value variable
    mentalValue: mentalValue, // Replace with your actual updated mental value variable
    physicalValue: physicalValue, // Replace with your actual updated physical value variable
  };
  // Call the callback to send back the updated scores
  receiveUpdatedScores(updatedScores);
  // Navigate back to Demo screen
  navigation.goBack(); 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 16,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 16,
    marginTop: 10,
    width: '98%'
  },
});

export default EditingScreen;
