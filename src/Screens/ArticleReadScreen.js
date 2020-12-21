import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share
} from "react-native";
import shareImage from "../assets/icons/share.png";
import heartImage from "../assets/icons/chad.png";
import * as firebase from 'firebase';
import { db } from "../firebase/firebase";


//USESTATE FUNCTION TO CALCULATE SALUTES


const ArticleReadPage = ({ route, navigation }) => {
  const {
    articleText,
    articleImage,
    articleSummary,
    articleSalute,
    articleUid
  } = route.params;
  const Link = `${articleText}`; 
  let salutes = parseInt({ articleSalute });
  const increment = firebase.firestore.FieldValue.increment(1);

  return (
    <SafeAreaView style={{ backgroundColor: "black",  }}>
      <View style={{ height: "100%", backgroundColor: "black", }}>
        <Image
          style={{
            width: "100%",
            height: 250
          }}
          source={{ uri: `${articleImage}` }}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginLeft: 10 }}></TouchableOpacity>
        </View>
<View style={styles.articleText}><Text style={{color: 'white'}} >{articleSummary}</Text>
          <Text style={{ margin: 10, color: 'grey', fontSize: 12 }}>Salutes:{articleSalute}</Text>
        </View>
        

        <ScrollView style={{}}>
          <Text style={{ padding: 20, color: "white" }}>{articleText}</Text>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/*SHAREBUTTON*/}
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              padding: 10,
              marginHorizontal: 80,
              shadowColor: "#2a0845",
              shadowOpacity: 2,
              shadowOffset: { width: 1, height: 5 }
            }}
            onPress={async function() {
              await Share.share({
                message: Link
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
              shadowColor: "#2a0845",
              shadowOpacity: 2,
              shadowOffset: { width: 1, height: 5 }
            }}
            onPress={
              () => {
                return db
                .collection("articles")
                .doc(articleUid )
                .update(
                  {
                    salute: increment
                  },
                  { merge: true }
                );
            }
             
            }
          >
            
            <Image style={{ width: 30, height: 30 }} source={heartImage} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: "white",
    height: "100%",
    color: "white"
  },

  articleText: {
    padding: 20,
    backgroundColor: "#191919",
    color: "white",
    flexDirection: 'row',
    alignItems: "center"
  }
});

export default ArticleReadPage;
