import React from 'react'
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Happy Partner, Happy Life</Text>
        <Text style={styles.text}>Average of 109 reviews</Text>
        <Text style={styles.text}>Relationship Health</Text>
        <Button 
            title='Add New Review'
            onPress={() => navigation.navigate('Rate')}
        ></Button>
        <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 8,
    }
});

export default HomeScreen