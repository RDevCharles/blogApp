import React, {useState, useEffect}from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import Card from '../Components/Card';
import { useNavigation } from "@react-navigation/native";
import { db } from '../firebase/firebase';
import MiniCard from '../Components/MiniCard';

const TipsScreen = () => {

    const [tips, setTips] = useState([]);


    useEffect(() => {
        const tipsData = [];
       return db.collection('tips')
            .onSnapshot(snapshot => {
                snapshot.forEach(doc => {
                    tipsData.push({ ...doc.data(), id: doc.id })
                })
                setTips(tipsData);
            })
    }, []);
    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={{flex:1, alignItems: 'center'}}>
                {tips.map(tip => {
                    return (
                        <TouchableOpacity key={tip.id} onPress={() => navigation.navigate("ArticlesReadPage", {
                            articleText: `${tip.article}`,
                            articleImage: `${tip.image}`,
                            articleSummary:`${tip.summary }`
                          })}>
                        <MiniCard
                           
                                title={tip.summary} />
                            </TouchableOpacity>)
                })}
            </View>
            </ScrollView>)
            
    }
    
export default TipsScreen