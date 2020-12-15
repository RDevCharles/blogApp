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
        backgroundColor: "white",
        marginTop: 40,
        shadowColor: "grey",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 10 }
      }}
      >

      <Text style={{margin:10}} p>{props.title}</Text>
    </View>
  );
};

export default MiniCard;
