import React from "react";

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
import * as firebase from "firebase";
import { db } from "../firebase/firebase";

const ArticleReadPage = ({ route }) => {
  const {
    articleText,
    articleImage,
    articleSummary,
    articleSalute,
    articleUid,
    articlePoint1,
    articlePoint2,
    articlePoint3
  } = route.params;
  
   //LINK AND APP LINK FOR SHARING
  const Link = `${articleText}`;
  const Url = "https://apps.apple.com/us/app/whatslegal/id1543793062";
  const increment = firebase.firestore.FieldValue.increment(1);

  //STATE OF SALUTES
  const [domSalute, setDomSalute] = React.useState(Number(articleSalute));

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <View style={{ height: "100%", backgroundColor: "black" }}>
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
        <View style={styles.articleText}>
          <Text style={{ color: "white" }}>{articleSummary}</Text>
          <Text style={{ margin: 10, color: "grey", fontSize: 12 }}>
            Salutes:{domSalute}
          </Text>
        </View>
{/*BOTTOM SCROLL STARTS */}
        <ScrollView style={{}}>
          <Text
            style={{ padding: 20, color: "white", backgroundColor: "#191219" }}
          >
            {articleText}
          </Text>

          {articlePoint1 ? (
            <Text style={{ padding: 20, color: "white", marginTop: 12 }}>
              {articlePoint1}
            </Text>
          ) : (
            <Text style={{ padding: 20, color: "white", marginTop: 12 }}>
              lo
            </Text>
          )}
          {articlePoint2 ? (
            <Text style={{ padding: 20, color: "white", marginTop: 12 }}>
              {articlePoint2}
            </Text>
          ) : null}
          {articlePoint3 ? (
            <Text style={{ padding: 20, color: "white", marginTop: 12 }}>
              {articlePoint3}
            </Text>
          ) : null}
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
    flexDirection: "row",
    alignItems: "center"
  }
});

export default ArticleReadPage;
