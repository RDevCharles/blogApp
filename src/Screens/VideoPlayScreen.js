import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Share,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

import { Audio, Video } from "expo-av";
import shareImage from "../assets/icons/share.png";
import heartImage from "../assets/icons/chad.png";

const VideoPlayScreen = ({ route, navigation }) => {
  const { videoText, videoSource, videoSummary } = route.params;
  const Link = `${videoSource}`;

  return (
    <SafeAreaView style={{backgroundColor: 'black' }}>
      <View style={vidStyles.vidContainer}>
        <Video
          source={{
            uri: `${videoSource}`
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          useNativeControls={true}     
          style={{ width: "100%", height: 300 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 300,
            padding: 20,
            backgroundColor: "#191919",
            color: "white",
            width: "100%"
          }}
        >
          {videoSummary}
        </Text>
      </View>
      <ScrollView style={{backgroundColor: 'black' }}>
        <Text style={{ padding: 20, backgroundColor:'black', color:'white' }}>{videoText}</Text>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          backgroundColor: "black",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 30,
            padding: 10,
            marginHorizontal: 80,
            shadowColor: "#2a0845",
            shadowOpacity: 2,
            shadowOffset: { width: 0, height: 10 }
          }}
          onPress={async function() {
            await Share.share({
              message: Link
            });
          }}
        >
          <Image style={{ width: 30, height: 30 }} source={shareImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 30,
            padding: 10,
            marginHorizontal: 80,
            shadowColor: "#2a0845",
            shadowOpacity: 2,
            shadowOffset: { width: 0, height: 10 },
            
          }}
          onPress={async function() {
            await Share.share({
              message: Link
            });
          }}
        >
          <Image style={{ width: 30, height: 30 }} source={heartImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const vidStyles = StyleSheet.create({
  vidContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
   
  }
});

export default VideoPlayScreen;
