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
        <ScrollView>
            <View style={{
                flex: 1,
                alignItems: 'center',
            }}>

                
                {articles.map((article) => {
            return (
              <TouchableOpacity key={article.id} onPress={() => navigation.navigate("ArticlesReadPage", {
                articleText: `${article.article}`,
                articleImage: `${article.image}`,
                articleSummary:`${article.summary }`
              })}>
                <Card
                  title={article.summary}
                  image={article.image} />
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