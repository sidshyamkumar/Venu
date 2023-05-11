import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight, Button, Image, StyleSheet, Text, View, Dimensions, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Font } from 'expo';
import { color } from '@rneui/base';

export default function MusicianProfile ({route, navigation}) {

    const posts = [
        { id: 1, backgroundColor: '#F00' },
        { id: 2, backgroundColor: '#0F0' },
        { id: 3, backgroundColor: '#00F' },
        // Add more posts here
      ];

    const numPosts = posts.length;

    const renderItem = ({ item }) => (
       <View style={styles.postContainer}>
            <View style={[styles.post, { backgroundColor: item.backgroundColor }]}/>
       </View>
    );
      
    return (
        <View style={styles.container}>
             <StatusBar style='light'/>
             <View style={styles.MusicianProfileContainer}>
                <View style={styles.topBar}>
                    <Image source={require('../Assets/logo.png')} style={styles.logo}/>
                </View>

                <View style={styles.profileSection}>
                    <View style={styles.profileHeader}>
                        <View style={styles.profilePicContainer}>
                            <View style={styles.profilePicHolder}>
                                <Image source={require('../Assets/venuProfilePic.png')} style={styles.profilePic}/>
                            </View>
                        </View>

                        <View style={styles.profileName}>

                        </View>

                        <View style={styles.generalDescription}>

                        </View>

                        <View style={styles.moreDescription}>

                        </View>
                    </View>


                </View> 

                <View style={styles.bottomBar}>

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

    MusicianProfileContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },

    topBar: { 
        width: '100%',
        height: '12%',
        backgroundColor: '#9B0CDE',
        paddingTop: '8%',
        paddingLeft: '0%',
        justifyContent: 'center'
    },

    profileSection: { 
        width: '100%',
        height: '76%%',
        backgroundColor: '#FFF',
        justifyContent: 'flex-start'
    },

    bottomBar: { 
        width: '100%',
        height: '12%',
        backgroundColor: '#9B0CDE',
        justifyContent: 'center',
        bottom: '0%',
        alignSelf: 'flex-end',
        marginTop: '5%'
    },
     
    logo: {
       resizeMode: 'contain',
       //width: '100%',
       height: '70%',
    },

    profileHeader: {
        width: '100%',
        height: '40%',
        //backgroundColor: '#F00',
        justifyContent: 'flex-start'
    },

    profilePicContainer : {
        justifyContent: 'center',
        width: '100%',
        height: '55%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: '2%'
    },

    profilePicHolder: {
        width: '40%',
        height: '100%',
    },

    profilePic: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        borderRadius: 120
    },

    postContainer: {
        // marginRight: '2%',
    //    marginLeft: '2%',
       height: '100%',
       width: Dimensions.get('window').width, // adjust for margins
       justifyContent: 'center',
       alignContent: 'center',
       backgroundColor: '#FFF',
       paddingHorizontal: '7%'    
    },

    post: {
        width: '100%',
        height: '100%',
        borderRadius: '60%'
    }

  });