import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PlayersHome from '../screens/Team';
import MyProfile from '../screens/MyProfile';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => { // Corrected 'childern' to 'children'
    return (
      <TouchableOpacity
        style={{
          top: -30,
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow,
        }}
        onPress={onPress}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };
  

const PlayerTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Team"
      screenOptions={{
        tabBarShowLabel: false, // Hide tabBar labels
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#e6e6e6',
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Team"
        component={PlayersHome}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.tabIcon}>
              <Icon
                name={focused ? 'person' : 'person-outline'} // Use the appropriate icon names
                size={size}
                color={color}
              />
              <Text style={styles.text}>PLAYERS</Text>
            </View>
          ),
        }}
      />
         {/* <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
            source={require('C:/reactNative/SoccerFinal/assets/R.png')}
            style={{
                width:60,
                height:60,
                borderRadius: 35,

            }}
            />
          ),
          tabBarButton: (props) =>(
            <CustomTabBarButton {...props}/>
          )
        }}
      /> */}
      <Tab.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.tabIcon}>
              <Icon
                name={focused ? 'settings' : 'settings-outline'} // Use the appropriate icon names
                size={size}
                color={color}
              />
              <Text style={styles.text}>My Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    top:10
  },
  text: {
    fontSize: 12,
  },
});

export default PlayerTab;
