import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableHighlight, Button, Image, StyleSheet, Text, View, Dimensions, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Font } from 'expo';
import { color } from '@rneui/base';

export default function FeedVenueView ({route, navigation}) {

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
             <View style={styles.feedVenueContainer}>
                <View style={styles.topBar}>
                    <Image source={require('../Assets/logo.png')} style={styles.logo}/>
                </View>

                <View style={styles.postSection}>
                    <View style={styles.sectionLabel}>
                        <Text style={styles.label}>Featured Musicians</Text>
                    </View>
                    {/* <ScrollView pagingEnabled='true' horizontal='true' contentContainerStyle={styles.scrollablePosts}>
                        <View style={styles.post}></View>
                        <View style={[styles.post]}></View>
                        <View style={styles.post}></View>
                        <View style={[styles.post]}></View>
                    </ScrollView> */}

                    <FlatList
                        data={posts}
                        horizontal= 'true'
                        pagingEnabled='true'
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={styles.scrollablePosts}
                        snapToInterval={Dimensions.get('window').width}
                        snapToAlignment='center'
                        decelerationRate="fast"
                    />
                    <View style={styles.sectionLabel}>
                        <Text style={styles.label}>Available Soon</Text>
                    </View>
                    <FlatList
                        data={posts}
                        horizontal= 'true'
                        pagingEnabled='true'
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={styles.scrollablePosts}
                        snapToInterval={Dimensions.get('window').width}
                        snapToAlignment='center'
                        decelerationRate="fast"
                    />
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

    feedVenueContainer: {
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

    postSection: { 
        width: '100%',
        height: '76%%',
        backgroundColor: '#FFF',
        justifyContent: 'center'
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

    sectionLabel: {
        height: '7%',
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingLeft: '3%'
    },

    label: {
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: '22%'
    },

    scrollablePosts: {
        height: '100%',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        flexGrow: 1,
        width: Dimensions.get('window').width * 4,
        pagingEnabled: 'true'
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