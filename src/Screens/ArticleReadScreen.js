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

const ArticleReadPage = ({ route, navigation }) => {
  const { articleText, articleImage, articleSummary } = route.params;
  const Link = `${articleText}`;

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white", height: "100%" }}>
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
        <ScrollView style={{ backgroundColor: "white" }}>
          <Text style={{ padding: 20 }}>{articleText}</Text>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            style={{ marginTop: 20 }}
            color="#6441A5"
            onPress={async function() {
              await Share.share({
                message: Link
              });
            }}
          >
            Share
          </Button>

          <Button
            style={{ marginTop: 20 }}
            color="#6441A5"
            onPress={() => {
              Linking.openURL("https://twitter.com/RondellsArt");
            }}
          >
            Like
          </Button>
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
    backgroundColor: "black",
    color: "white"
  }
});

export default ArticleReadPage;
