import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { db } from '../firebase/firebase';
import Card from '../Components/Card';
const Articles = () => {

    const [articles, setArticles] = useState([]);
 

    useEffect(() => {
      const articleData = [];
      return db.collection("articles")
        .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          articleData.push({ ...doc.data(), id: doc.id });
  
         
        });
          setArticles(articleData);
          
      });
    }, []);
   
  const navigation = useNavigation();
  
  
    return (
        <ScrollView style={{
        
    backgroundColor: '#191919'
      }}>
            <View style={{
                flex: 1,
          alignItems: 'center',
          backgroundColor: '#191919'
            }}>


                {articles.map((article) => {
            return (
              <TouchableOpacity key={article.id} onPress={() => navigation.navigate("Article", {
                articleText: `${article.article}`,
                articleImage: `${article.image}`,
                articleSummary: `${article.summary}`,
                articleSalute: `${article.salute}`,
                articleUid: `${article.id}`,
                articlePoint1: `${article.point1}`,
                articlePoint2: `${article.point2}`,
                articlePoint3: `${article.point3}`
              })}>
                <Card
                  title={article.summary}
                  image={article.image}
                  salute={article.salute} />
              
              </TouchableOpacity>
              
            )
          })}
            </View>

    </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    card: {
    
}
})

export default Articles;