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
  // const { videoText, videoSource, videoSummary } = route.params;
  // const Link = `${videoSource}`;

  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1
      }}
    >
    <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        useNativeControls={true}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay
    isLooping
    style={{ width: "auto", height: 300 }}
      />
      
      <View style={styles.articleText}>
          <Text style={{ color: "white" }}>This is a video summary</Text>
          <Text style={{ margin: 10, color: "grey", fontSize: 12 }}>
            Salutes:37
          </Text>
      </View>
      <ScrollView style={{backgroundColor: "black",}}>
          <Text
            style={{ padding: 20, color: "white", backgroundColor: "black", height:'auto' }}
          >
            this is the test that will give a brief summary even though it is not a summary.
          </Text>

       
      </ScrollView>
      <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            justifyContent: "center",
            borderTopWidth: 1,
            borderTopColor: "purple"
          }}
        >
          {/*SHAREBUTTON*/}
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              padding: 10,
              marginHorizontal: 80,
              marginTop: 20,
              shadowColor: "purple",
              shadowOpacity: 2,
              shadowOffset: { width: 1, height: 5 }
            }}
            onPress={async function() {
              await Share.share({
                subject: Link,
                message: Link,
                url: Url
              });
            }}
          >
            <Image style={{ width: 30, height: 30 }} source={shareImage} />
          </TouchableOpacity>
          {/*SALUTE (LIKE)BUTTON*/}
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 30,
              padding: 10,
              marginHorizontal: 80,
              marginTop: 20,
              shadowColor: "purple",
              shadowOpacity: 2,
              shadowOffset: { width: 1, height: 5 }
            }}
            onPress={() => {
              setDomSalute(domSalute);

              return (
                db
                  .collection("articles")
                  .doc(articleUid)
                  .update(
                    {
                      salute: increment
                    },
                    { merge: true }
                  ),
                setDomSalute(domSalute => ++domSalute)
              );
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
   
  },
  articleText: {
    padding: 20,
    backgroundColor: "#191919",
    color: "white",
    flexDirection: "row",
    alignItems: "center"
  }
});

export default VideoPlayScreen;
