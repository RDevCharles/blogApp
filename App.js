import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ArticleReadPage from "./src/Screens/ArticleReadScreen";
import VideoPlay from "./src/Screens/VideoPlayScreen";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerBackTitleStyle: {}
        }}
      >
        <Stack.Screen
          name="WhatsLegal"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "black",
              shadowColor: "transparent"
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white"
            }
          }}
          
        />
        <Stack.Screen
          name="Article"
          component={ArticleReadPage}
          options={{
            headerStyle: {
              backgroundColor: "black",
              shadowColor: "transparent"
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
              borderBottomColor: "transparent"
            },
            // headerLeft: () => (
            //   <Button
            //     onPress={() => navigation.navigate('Home')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
        />
        <Stack.Screen
          name="Video"
          component={VideoPlay}
          options={{
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//TODO: 
//Change back button to go back and refresh page so that salute state is updated if it has been chanhged.
//Fix FlatList.
//Add Sign in feature. Make optional and the benifit is getting updates when new stories update.

