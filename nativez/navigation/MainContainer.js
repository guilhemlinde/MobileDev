import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';

const iconColorHover = 'grey';
const iconColor = 'rgb(255,69,0)';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: iconColor,
          tabBarInactiveTintColor: iconColorHover,
          tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
          tabBarStyle: {padding: 10, height: 70},
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
