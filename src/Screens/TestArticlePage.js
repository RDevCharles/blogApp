import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList, 
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase/firebase";
import Card from "../Components/Card";

const TestArticlePage = () => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const articleData = [];
    return db.collection("articles").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        articleData.push({ ...doc.data(), id: doc.id });
      });
      setArticles(articleData);
      console.log(articles[0].article)
    });
    
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const articleData = [];
      return db.collection("articles").onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          articleData.push({ ...doc.data(), id: doc.id });
        });
        setArticles(articleData);
      });
    });
    return unsubscribe;
  }, [navigation]);

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#191919"
      }}
    >
      <FlatList
        data={articles}
        renderItem={() => {
          <TouchableOpacity
          >
          <Card
            title={articles.summary}
            image={articles.image}
            salute={articles.salute}
          />
        </TouchableOpacity>
        }}
 keyExtractor={article => article.id}       
    >
    </FlatList>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  card: {}
});

export default TestArticlePage;
