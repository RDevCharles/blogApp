import React, {useState, useEffect} from 'react';
import {ScrollView, View } from 'react-native';
import Card from '../Components/Card';
import { Text } from 'galio-framework';
import {db} from '../firebase/firebase';




const Projects = () => {
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
                        <Card key={video.id}
                        title={video.title}
                        image={video.thumbnail}/>
                    )
                })}
        </View>

</ScrollView>
  
    )
    
}

export default Projects;