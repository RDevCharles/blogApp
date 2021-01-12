import React, {useState, useEffect, useContext} from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { db } from '../firebase/firebase';



 SaluteContext = () => {
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
 
    articles.map(article => {
        const SaluteContext = createContext(article.salute);   
    })
    
   
    
    
    
}
export default SaluteContext