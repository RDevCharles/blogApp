import React from "react";
import { TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase/firebase";
import Card from "../Components/Card";

const Articles = () => {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const articleData = [];
    return db.collection("articles").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        articleData.push({ ...doc.data(), id: doc.id });
      });
      setArticles(articleData);
    });
  }, []);
  console.log(articles);

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
        backgroundColor: "#191919",
        flex: 1
      }}
    >
      <FlatList
        style={{
          padding: 40,
          alignSelf: "center"
        }}
        data={articles}
        refreshing={false}
        onRefresh={() => {
          const articleData = [];
          return db.collection("articles").onSnapshot(snapshot => {
            snapshot.forEach(doc => {
              articleData.push({ ...doc.data(), id: doc.id });
            });
            setArticles(articleData);
          });
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("Article", {
                  articleText: `${item.article}`,
                  articleImage: `${item.image}`,
                  articleSummary: `${item.summary}`,
                  articleSalute: `${item.salute}`,
                  articleUid: `${item.id}`,
                  articlePoint1: `${item.point1}`,
                  articlePoint2: `${item.point2}`,
                  articlePoint3: `${item.point3}`
                })
              }
            >
              <Card
                title={item.summary}
                image={item.image}
                salute={item.salute}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={article => article.id}
      />
    </SafeAreaView>
  );
};

export default Articles;
