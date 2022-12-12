import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function AboutScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>This app aims to help couples keep track of their relationship health - tracking both good and bad days</Text>
        <Text style={styles.text}>Through this, we hope to improve the ratio of good-to-bad interactions between couples</Text>
        <Text style={styles.text}>We will let you know when the relationship is at risk!</Text>
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

export default AboutScreen