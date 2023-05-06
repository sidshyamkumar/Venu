import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight, Button, Image, StyleSheet, Text, View, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { color } from '@rneui/base';

export default function WelcomeScreen ({route, navigation}) {

    return (
        <View style={styles.container}>
             <StatusBar style='light'/>
             <View style={styles.welcomeContainer}>
                <Image source={require('./Assets/logo.png')}/>
             </View>
        </View>    
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#000',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },

    welcomeContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        spacing: 0,
        backgroundColor: '#9B0CDE'
    },

  });