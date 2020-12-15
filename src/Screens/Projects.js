import React, {useState, useEffect} from 'react';
import {ScrollView, View, TouchableOpacity } from 'react-native';
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
    
  
    return (
       <ScrollView>
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
               
                {videos.map(video => {
                    return (
                        <TouchableOpacity key ={video.id} onPress={() => {
                            props.navigation.navigate("Video", {
                                videoText: `${video.des}`,
                                videoSource: `${video.clip}`,
                                videoSummary:`${video.title}`
                              })
                            
                        }}>
                        <Card key={video.id}
                        title={video.title}
                                image={video.thumbnail} />
                            </TouchableOpacity>
                    )
                })}
        </View>

</ScrollView>
  
    )
    
}

export default Projects;