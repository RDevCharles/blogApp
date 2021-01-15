import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ArticleReadPage from "./src/Screens/ArticleReadScreen";
import VideoPlay from "./src/Screens/VideoPlayScreen";

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
            }
          }}
        />
        <Stack.Screen
          name="WhatsLegal Video"
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
//Add Sign in feature. Make optional and the benifit is getting updates when new stories update.
