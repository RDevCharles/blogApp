import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Share, ScrollView, TouchableOpacity, Image } from "react-native";

import { Audio, Video } from "expo-av";
import shareImage from "../assets/icons/share.png";
import heartImage from "../assets/icons/heart.png";




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
            <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >      
          <TouchableOpacity style={{backgroundColor:'lightgrey', borderRadius:30, padding:10, margin:10}} onPress={async function() {
              await Share.share({
                message: Link
              });
            }}>
        <Image style={{width:30, height:30}} source={shareImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'lightgrey', borderRadius:30, padding:10}} onPress={async function() {
              await Share.share({
                message: Link
              });
            }}>
        <Image style={{width:30, height:30}} source={heartImage}/>
      </TouchableOpacity>
          
        </View>
           
          
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
