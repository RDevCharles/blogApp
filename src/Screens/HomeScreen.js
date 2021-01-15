import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import Articles from "./Articles";
import Tips from "./TipsScreen";
import About from "./About";
import VideoScreen from "./VideoPlayScreen";
import VideoList from "./Projects";
import { InstantSearch, SearchBox, Hits, connectHighlight } from 'react-instantsearch-dom';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  //LIST OF STATIC ICONS

  const homeIcon = "https://img.icons8.com/android/24/333333/home.png";
  const homeIconFocused = "https://img.icons8.com/android/24/ffffff/home.png";
  const videoIconFocused = "https://img.icons8.com/ios-glyphs/30/ffffff/play--v1.png";
  const videoIcon = "https://img.icons8.com/ios-glyphs/30/333333/play--v1.png";
  const coinsIcon =
    "https://img.icons8.com/ios-glyphs/30/333333/stack-of-coins.png";
  const coinsIconFocused =
    "https://img.icons8.com/ios-glyphs/30/ffffff/stack-of-coins.png";
  const aboutIcon =
    "https://img.icons8.com/ios-glyphs/30/333333/information.png";
  const aboutIconFocused =
    "https://img.icons8.com/ios-glyphs/30/ffffff/information.png";

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Tab.Navigator
        tabBarOptions={{
          pressOpacity: 0,
          activeTintColor: "white",
          inactiveTintColor: "#D3D3D3",

          style: {
            backgroundColor: "black",

            borderTopColor: "black"
          },
          indicatorStyle: {
            backgroundColor: "red",
            color: "red",
            borderTopWidth: 2
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Articles}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? homeIconFocused : homeIcon;
              }
              return (
                <Image
                  style={{
                    width: 20,
                    height: 20
                  }}
                  source={{ uri: `${iconName}` }}
                />
              );
            }
          })}
        />
<Tab.Screen
          name="Video"
          component={VideoList}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === "Video") {
                iconName = focused ? videoIconFocused : videoIcon;
              }
              return (
                <Image
                  style={{
                    width: 20,
                    height: 20
                  }}
                  source={{ uri: `${iconName}` }}
                />
              );
            }
          })}/>
        
        <Tab.Screen
          name="Quick Tips"
          component={Tips}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "Quick Tips") {
                iconName = focused ? coinsIconFocused : coinsIcon;
              }
              return (
                <Image
                  style={{
                    width: 20,
                    height: 20
                  }}
                  source={{ uri: `${iconName}` }}
                />
              );
            }
          })}
        />

        <Tab.Screen
          name="About"
          component={About}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "About") {
                iconName = focused ? aboutIconFocused : aboutIcon;
              }
              return (
                <Image
                  style={{
                    width: 20,
                    height: 20
                  }}
                  source={{ uri: `${iconName}` }}
                />
              );
            }
          })}
        />
      
      </Tab.Navigator>
    </View>
  );
};



export default HomeScreen;
