import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Share, Button } from "react-native";
import { Accordion, Block } from 'galio-framework';
import { Audio, Video } from "expo-av";

const VideoPlayScreen = ({ route, navigation }) => {
    const { videoText, videoSource, videoSummary } = route.params;
    const Link =  `${videoSource}`
  
    
    return (
      <SafeAreaView>
    <View style={vidStyles.vidContainer}>
      <Video
        source={{
          uri:
            `${videoSource}`
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
            <Text style={{ marginTop: 320, marginLeft: 20 }}>{videoSummary}</Text>
            <Button onPress={async function() {
                await Share.share({
                    message:Link
               })
            }} title="Share"/>
         
            </SafeAreaView>
  );
        }

const vidStyles = StyleSheet.create({
  vidContainer: {
    flex: 1,
    alignItems: "center",
  
  }
});

export default VideoPlayScreen;
