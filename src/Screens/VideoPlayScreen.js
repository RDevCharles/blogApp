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
import heartImage from "../assets/icons/heart.png";

const VideoPlayScreen = ({ route, navigation }) => {
  const { videoText, videoSource, videoSummary } = route.params;
  const Link = `${videoSource}`;

  return (
    <SafeAreaView>
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
          useNativeControls
          style={{ width: "100%", height: 300 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginTop: 300,
            padding: 20,
            backgroundColor: "#2a0845",
            color: "white",
            width: "100%"
          }}
        >
          {videoSummary}
        </Text>
      </View>
      <ScrollView>
        <Text style={{ padding: 20 }}>{videoText}</Text>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop:20
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 30,
            padding: 10,
            marginHorizontal: 80,
            shadowColor: "#6441A5",
            shadowOpacity: 0.2,
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
            backgroundColor: "white",
            borderRadius: 30,
            padding: 10,
            marginHorizontal: 80,
            shadowColor: "#6441A5",
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 10 }
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
   
  }
});

export default VideoPlayScreen;
