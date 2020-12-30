import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Share } from "react-native";
import { Text } from "galio-framework";
import shareImage from "../assets/icons/share.png";


const MiniCard = (props) => {
  return (
    <View
      style={{
        width: 320,
        height: 'auto',
        borderRadius: 10,
        backgroundColor: "black",
        color: "white",
        marginTop: 40,
        shadowColor: "grey",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 1 },
        justifyContent: "center",
        alignItems:'center'
      }}
    >
      <Image style={{ marginTop:10, width: 70, height: 70, borderRadius:40, justifyContent: "center", alignSelf: "center"}} source={{uri:`${props.image}`}}/>

      <Text style={{ margin: 10, color: 'white', textAlign: 'center' }} p>{props.title}</Text>
      <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              padding: 5,
              
              marginTop: 20,
            
            }}
            onPress={async function() {
              await Share.share({
                message: props.title
              });
            }}
          >
            <Image style={{ width: 30, height: 30 }} source={shareImage} />
            
          </TouchableOpacity>
    </View>
  );
};

export default MiniCard;
