//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TouchableHighlight, Button, StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import SignUpScreen from './Screens/SignUpScreen';
import FeedVenueView from './Screens/FeedVenueView';
import MusicianProfile from './Screens/MusicianProfile';
import {VenueCalendar}  from './Screens/VenueCalendar';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="Open"
            component={WelcomeScreen}
        />

        <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
        />

        <Stack.Screen
            name="FeedVenueView"
            component={FeedVenueView}
        />

        <Stack.Screen
            name="VenueCalendar"
            component={VenueCalendar}
        />

        <Stack.Screen
            name="MusicianProfile"
            component={MusicianProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
