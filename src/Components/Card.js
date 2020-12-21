import React, {useState} from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "galio-framework";


const Card = (props) => {
  const [saluteCount, setSaluteCount] = useState(0);
  return (
    <View
      style={{
        width: 320,
        height: 'auto',
        borderRadius: 10,
        backgroundColor: "black",
        marginTop: 40,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 1 }
        
      }}
      >
          <Image style={{
              width: 320,
              height: 250,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
          }} source={{ uri: `${props.image}` }} />
      <Text style={{ margin: 10, color: 'white' }} p>{props.title}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>

      <Text style={{margin:10, color:'grey'}}>Salutes:</Text>
      <Text style={{ color:'grey', fontSize:14}} p>{props.salute}</Text>
      </View>
      
    </View>
  );
};

export default Card;
