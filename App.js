import { StatusBar } from 'expo-status-bar';
import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ArticleReadPage from "./src/Screens/ArticleReadScreen";
import VideoPlay from './src/Screens/VideoPlayScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer
     
    >
      <Stack.Navigator
         screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerBackTitleStyle: {
            
        }
        }}
      >
        <Stack.Screen name="WhatsLegal" component={HomeScreen} options={{
          headerStyle: { backgroundColor: 'black', shadowColor: 'transparent' },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            
          },
          
                }} />
        <Stack.Screen name="Article" component={ArticleReadPage} options={{
         
          headerStyle: {
            backgroundColor: 'black',
            shadowColor:'transparent',
           },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            borderBottomColor: 'transparent',
           
          },
          
          
                }} />
        <Stack.Screen name="Video" component={VideoPlay} options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white'
          },
                }}/>
      </Stack.Navigator>
      </NavigationContainer>
      
   
  );
}


//Add video options to
//fix up ui