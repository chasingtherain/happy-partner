import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReviewFormScreen from './src/screens/ReviewFormScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import AboutScreen from './src/screens/settingsScreen/AboutScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Rate" component={ReviewFormScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
   )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
