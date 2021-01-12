import React, {useState, useEffect}from 'react';
import { ScrollView, View } from 'react-native';
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


    return (
        <ScrollView style={{backgroundColor:'#191919'}}>
        <View style={{flex:1, alignItems: 'center', }}>
                {tips.map(tip => {
                    return (
                   
                        <MiniCard
                           key ={tip.id}
                            title={tip.summary}
                            image={tip.image}
                        
                        />
                    
                    )
                })}
            </View>
            </ScrollView>)
            
    }
    
export default TipsScreen

//NAV FEATURES COMMENTED OUT