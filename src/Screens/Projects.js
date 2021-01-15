import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, View, TouchableOpacity, FlatList } from 'react-native';
import Card from '../Components/Card';
import {db} from '../firebase/firebase';

const Projects = props => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const videoData = [];
        return db.collection("videos")
            .onSnapshot(snapshot => {
                snapshot.forEach(doc => {
                    videoData.push({ ...doc.data(), id: doc.id });
                });
                setVideos(videoData)
        })
    }, [])

    React.useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
          const videoData = [];
          return db.collection("videos").onSnapshot(snapshot => {
            snapshot.forEach(doc => {
              videoData.push({ ...doc.data(), id: doc.id });
            });
            setVideos(videoData);
          });
        });
        return unsubscribe;
    }, [navigation]);
    
    const navigation = useNavigation()
    
  
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#191919'}}>
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
               
               
                        
                <FlatList
                    style={{ padding: 40 }}
                            data={videos}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity key ={item.id} onPress={() => {
                                        props.navigation.navigate("VideoPlay", {
                                            videoText: `${item.des}`,
                                            videoSource: `${item.clip}`,
                                            videoSummary: `${item.title}`,
                                            videoUid: `${item.id}`,
                                            videoSalute: `${item.salute}`
                                          })
                                        
                                    }}>
                                        <Card key={item.id}
                                            title={item.title}
                                            image={item.thumbnail}
                                            salute={item.salute}/>
                                        
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    
                
        </View>

</SafeAreaView>
    
    )
    
}

export default Projects;