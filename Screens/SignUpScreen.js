import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight, Button, Image, StyleSheet, Text, View, Dimensions, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { color } from '@rneui/base';

export default function SignUpScreen ({route, navigation}) {

    return (
        <View style={styles.container}>
             <StatusBar style='light'/>
             <View style={styles.signupScreenContainer}>
                <Image source={require('../Assets/SignUpPic.png')} style={styles.signUpPic}/>
                <View style={styles.controlsContainer}>
                    <Text style={styles.signUpText}>Book your next gig with Venu</Text>
                    <Text style={styles.signUpText}>Get started as a</Text>
                    <View style={styles.buttonsContainer}>
                        {<TouchableOpacity style={styles.musicianButton} onPress={()=> navigation.navigate('SignUp', {
                                    text: 'Hello'
                            })} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>Musician</Text>        
                        </TouchableOpacity>}
                        {<TouchableOpacity style={styles.venueButton} onPress={()=> navigation.navigate('FeedVenueView', {
                                    text: 'Hello'
                            })} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>Venue</Text>        
                        </TouchableOpacity>}
                    </View>
                    <Text style={styles.loginPrompt}>Already have an account?</Text>
                    <Image source={require('../Assets/pinkBlob.png')} style={styles.pinkBlobStyle}/>
                    <Image source={require('../Assets/purpleBlob.png')} style={styles.purpleBlobStyle}/>
                    <Button title='Sign in'></Button>
                </View>
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

    signupScreenContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#9B0CDE'
    },

    signUpPic: {
        alignSelf: 'flex-start',
        position: 'relative'
    },

    controlsContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        alignSelf: 'flex-end',
        width: '100%',
        height: '66%',
        bottom: '0%',
        borderRadius: '40%',
        alignItems: 'center',
        paddingTop: '20%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    signUpText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: '26%',
        marginBottom: '12%',
        zIndex: 2
    },

    buttonsContainer: {
        //backgroundColor: '#F00',
        width: '80%',
        height: '30%',
        marginBottom: '10%',
        zIndex: 2
    },

    buttonText:{
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: '22%',
        color: '#FFF'

    },

    musicianButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "35%",
        backgroundColor: "#1E0074",
        borderRadius: 25
    },

    venueButton : {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "35%",
        backgroundColor: "#1E0074",
        borderRadius: 25,
        bottom: '0%',
        alignSelf: 'flex-end',
        position: 'absolute'
    },

    loginPrompt: {
        fontFamily: 'System',
        fontSize: "15%",
        zIndex: 2
    },

    signInText: {
        zIndex: 2
    },

    purpleBlobStyle: {
        position: 'absolute',
        bottom: '0%',
        opacity: 1
    },

    pinkBlobStyle: {
        position: 'absolute',
        bottom: '0%',
        opacity: 1
    }

  });