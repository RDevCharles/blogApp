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

import { Video } from "expo-av";
import shareImage from "../assets/icons/share.png";
import heartImage from "../assets/icons/chad.png";
import * as firebase from "firebase";
import { db } from "../firebase/firebase"

const VideoPlayScreen = ({ route }) => {
  const { videoText, videoSource, videoSummary, videoUid, videoSalute } = route.params;

  //LINK AND APP LINK FOR SHARING
  const Link = { videoSource };
  const Url = "https://apps.apple.com/us/app/whatslegal/id1543793062"


//SALUTE STATE AND FIREBASE INCREMENT FUNCTION
  const [domSalute, setDomSalute] = React.useState(Number(videoSalute));
  const increment = firebase.firestore.FieldValue.increment(1);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1
      }}
    >
    <Video
        source={{ uri: `${videoSource}` }}
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
          <Text style={{ color: "white" }}>{videoSummary}</Text>
          <Text style={{ margin: 10, color: "grey", fontSize: 12 }}>
            Salutes:{domSalute}
          </Text>
      </View>
      <ScrollView style={{backgroundColor: "black",}}>
          <Text
            style={{ padding: 20, color: "white", backgroundColor: "black", height:'auto' }}
          >
          {videoText}
          </Text>

        {/*LOWER HALF SCROLL*/}
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
                  .collection("videos")
                  .doc(videoUid)
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
