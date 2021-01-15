import React, {useState, useEffect}from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import { db } from '../firebase/firebase';
import MiniCard from '../Components/MiniCard';



const TipsScreen = () => {
//TIPS STATE CHANGE
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
        <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:"#191919"}}>
       
    
            <FlatList
                style={{ padding: 40}}
            data={tips}
            renderItem={({ item }) => {
                return (
                   
                    <MiniCard
                       key ={item.id}
                        title={item.summary}
                        image={item.image}
                    
                    />
                
                ) 
            }}
            keyExtractor={tip => tip.id}
        />
    
    </SafeAreaView> 
    
    )
            
            
    }
    
export default TipsScreen

//NAV FEATURES COMMENTED OUT