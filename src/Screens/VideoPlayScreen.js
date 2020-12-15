import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Share, Button, ScrollView } from "react-native";
import { Accordion, Block } from 'galio-framework';
import { Audio, Video } from "expo-av";
import { white } from "color-name";

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
            <View style={{  borderBottomWidth: .3,borderBottomColor: 'black'}}>
                <Text style={{ marginTop: 300, padding: 20, backgroundColor: 'black', color:'white', borderBottomColor: 'red' }}>{videoSummary}</Text>
                </View>
            <ScrollView>
                <Text style={{ padding: 20 }}>{videoText}</Text>
                </ScrollView>
            <Button onPress={async function() {
                await Share.share({
                    message:Link
                })
            }} title="Share" />
            <Button
                title='Like'
            ></Button>
         
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
