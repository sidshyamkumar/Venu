// VenueCalendar.js
import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text, Image } from 'react-native';
import { Calendar } from 'react-native-calendars'; // <-- Import the Calendar component

export function VenueCalendar({ navigation }) {
    return (
        <View style={styles.container}>
             <View style={styles.feedVenueContainer}>
                <View style={styles.topBar}>
                    <Image source={require('../Assets/logo.png')} style={styles.logo}/>
                </View>

                <View style={styles.buttonBar}> 
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color: '#000', fontSize: 16}}>Status</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color: '#757575', fontSize: 16}}>Submissions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color: '#757575', fontSize: 16}}>Modify</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bookingButtons}>
                    <TouchableOpacity style={styles.roundButton}>
                        <Text style={{color: '#fff', fontSize: 16}}>Booked</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roundButton}>
                        <Text style={{color: '#fff', fontSize: 16}}>Unbooked</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.calendarContainer}>
                    <Calendar 
                        onDayPress={(day) => Alert.alert('Selected day', day.dateString)}
                        markedDates={{
                            '2023-05-16': {selected: true, marked: true, selectedColor: '#9B0CDE'},
                        }}
                    />
                </View>

                <View style={styles.bottomBar}>
                    <TouchableOpacity onPress={() => navigation.navigate('MusicianProfile')}>
                        <Text style={{color: '#fff', fontSize: 20}}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('VenueCalendar')}>
                        <Text style={{color: '#808080', fontSize: 20}}>Calendar</Text>
                    </TouchableOpacity>
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
    buttonBar: { 
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#FFF',
        width: '100%',
    },
    bookingButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    roundButton: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#9B0CDE',
        marginHorizontal: 20,
    },
    calendarContainer: { 
        width: '100%',
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingBottom: 200
    },
    bottomBar: { 
        width: '100%',
        height: '12%',
        backgroundColor: '#9B0CDE',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: '0%',
        alignSelf: 'flex-end',
        marginTop: '5%'
    },
    logo: {
       resizeMode: 'contain',
       height: '70%',
    },
});



