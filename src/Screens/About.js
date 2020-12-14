import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slider, Block } from "galio-framework";
import * as Linking from "expo-linking";
import { Button } from "galio-framework";

const About = () => {
  return (
    <View style={{ margin: 30 }}>
      <Text style={styles.headerStyle}>About Legal</Text>
      <Text style={styles.p}>
        {`Legal is a way to share ideas on privacy and technology.
        
I claim no responsibility for the actions taken after viewing content on this platform nor do I encourage any illegal activities after viewing content on this platform.
The content posted is for entertainment purposes only.
        `}
      </Text>

    
      <Text style={styles.p}>
        {`Any questions or concerns feel free to dm me`}
      </Text>

      <Button
        style={{ marginTop: 20 }}
        color="#0094ea"
        onPress={() => {
          Linking.openURL("https://twitter.com/RondellsArt");
        }}
      >
        Twitter
      </Button>

      <Button
        style={{ marginTop: 20 }}
        color="black"
        onPress={() => {
          Linking.openURL("https://github.com/RDevCharles");
        }}
      >
        GitHub
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
    margin: 0,

    padding: 30,
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  },

  topBanner: {
    width: "100%",
    height: 60,
    color: "blue",
    backgroundColor: "red",
    position: "relative",
    margin: 0,
    padding: 0
  },
  headerStyle: {
    fontSize: 20,
    marginBottom: 20
  }
});

export default About;
