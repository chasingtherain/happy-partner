import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function FeedbackScreen() {
  const [feedbackValue, setFeedbackValue] = React.useState("")

  const handleSubmit = () => {
    // Do something with the form data here, such as sending it to an API
    console.log(`The form was submitted! Value 1: ${feedbackValue}`);
  }

  return (
    <View style={styles.container}>
        <Text>How can we improve your experience?</Text>
        <TextInput
          placeholder='hi there!'
          style={{
            height: 80,
            width: 250,
            margin: 10,
            borderWidth: '1',
            borderColor: 'gray',
          }}
          value={feedbackValue}
          onChangeText = {(text) => setFeedbackValue(text)}
          onSubmitEditing={handleSubmit}
        />
        <Button title='Submit'></Button>
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

export default FeedbackScreen