import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "galio-framework";


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
        shadowOffset: { width: 0, height: 1 }
      }}
    >
      <Image style={{ marginTop:10, width: 70, height: 70, borderRadius:40, justifyContent: "center", alignSelf: "center"}} source={{uri:`${props.image}`}}/>

      <Text style={{margin:10, color: 'white', textAlign:'center'}} p>{props.title}</Text>
    </View>
  );
};

export default MiniCard;
