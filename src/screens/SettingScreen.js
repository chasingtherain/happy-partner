import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

function SettingScreen({navigation}) {

    const settingsData = [
        {
          id: 1,
          name: 'About',
        },
        {
          id: 2,
          name: 'History',
        },
        {
          id: 3,
          name: 'Notification',
        },
        {
          id: 4,
          name: 'Invite Friend',
        },
        {
          id: 5,
          name: 'Feedback',
        },
    ];

    const SettingsItem = ({ name }) => (
    <View style={styles.settingsContainer}>
        <Text onPress={() => navigation.navigate('Rate')}>{name}</Text>
    </View>
    );

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        settingsContainer: {
          padding: 10,
          width: Dimensions.get('window').width,
          height: 50,
          borderWidth: 1,
          borderColor: '#eee'
        },
      });

    const handlePress = (item) => {
        // Do something with the item that was pressed
        console.log("pressed")
        console.log(item.name)
        
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={settingsData}
                renderItem={({ item }) => <SettingsItem name={item.name}/>}
                // renderItem={({ item }) => <SettingsItem name={item.name} onPress={() => handlePress(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
                    
    )    
}

export default SettingScreen