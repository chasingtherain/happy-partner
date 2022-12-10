import React from 'react'
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function ReviewFormScreen() {
  const [value, setValue] = React.useState(0)
  return (
    <View style={styles.container}>
        <Text>How would you rate your partner's behavior today?</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={value}
          onValueChange={setValue}
        />
        <Text style={value ? {}: { display: 'none'}}>Performance: {value}/10</Text>
        <Text>What did your partner do right or wrong?</Text>
        <TextInput
          placeholder='hi there!'
          style={{
            height: 80,
            width: 250,
            margin: 10,
            borderWidth: '1',
            borderColor: 'gray',
          }}
        />
        <Button title='Submit'></Button>
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
});

export default ReviewFormScreen