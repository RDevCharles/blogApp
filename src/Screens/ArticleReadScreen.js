import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Share
} from "react-native";

const ArticleReadPage = ({ route, navigation }) => {
    const { articleText, articleImage, articleSummary } = route.params;
    const Link =  `${articleText}`
  
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
        <Text style={{ color: "white", marginTop: 20 }}>{articleSummary}</Text>
        <Image
          style={{
            width: "100%",
            height: 250,
            marginTop: 20
          }}
          source={{ uri: `${articleImage}` }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity style={{ marginLeft: 10 }}></TouchableOpacity>
        </View>

        <Text style={styles.articleText}>{articleSummary}</Text>

        <Text style={{ padding: 20 }}>{articleText}</Text>
        <Button
          onPress={async function() {
            await Share.share({
              message: Link
            });
          }}
          title="Share"
        />
        <Button title="Like"></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: "white",
    height: "100%"
  },

  articleText: {
    padding: 20,
    backgroundColor: "black",
    color: "white"
  }
});

export default ArticleReadPage;
