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
import { Button } from "galio-framework";
import shareImage from "../assets/icons/share.png";
import heartImage from "../assets/icons/heart.png";

const ArticleReadPage = ({ route, navigation }) => {
  const { articleText, articleImage, articleSummary } = route.params;
  const Link = `${articleText}`;

  return (
    <SafeAreaView>
      <View style={{ height: "95%", backgroundColor:'white' }}>
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

        <Text style={styles.articleText}>{articleSummary}</Text>
        
        <ScrollView style={{ }}>
          <Text style={{ padding: 20 }}>{articleText}</Text>
         
              </ScrollView>
              <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 30,
            padding: 10,
            marginHorizontal: 80,
            shadowColor: "blue",
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
            shadowColor: "blue",
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
      </View>
      
  
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: "white",
        height: "100%",
    color:'white'
  },

  articleText: {
    padding: 20,
    backgroundColor: "#2a0845",
    color: "white"
  }
});

export default ArticleReadPage;
