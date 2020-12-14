import { StatusBar } from 'expo-status-bar';
import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ArticleReadPage from "./src/Screens/ArticleReadScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Legal" component={HomeScreen} />
        <Stack.Screen name="ArticlesReadPage" component={ArticleReadPage} />
      </Stack.Navigator>
      </NavigationContainer>
   
  );
}
