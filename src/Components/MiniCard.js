import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Share } from "react-native";
import { Text } from "galio-framework";
import shareImage from "../assets/icons/share.png";

const MiniCard = props => {
  return (
    <View
      style={{
        width: "auto",
        height: "auto",
        borderBottomColor: "red",
        marginBottom: 30,
       
        justifyContent: "left",
        alignItems: "center",
        borderBottomWidth:1,
        borderBottomColor:'#191919'
      }}
    >
      <View style={{flexDirection:'row'}}>
      <Image
        style={{
          width: 70,
          height: 70,
          marginBottom: 30,
          marginRight:20
        }}
        source={{ uri: `${props.image}` }}
        />
        <View style={{flexDirection:"column"}}>

      <Text style={{ marginBottom: 0, color: "white", textAlign: "left", width:280}} p>
        {props.title}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          borderRadius: 10,
              marginTop: 20,
              marginBottom:20
       
        }}
        onPress={async function() {
          await Share.share({
            message: props.title
          });
        }}
      >
        <Image style={{ width: 20, height: 20 }} source={shareImage} />
          </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default MiniCard;
