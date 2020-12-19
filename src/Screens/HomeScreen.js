import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Articles from './Articles';
import Projects from './Projects';
import Tips from './TipsScreen';
import About from './About';

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor:'black', }}>
            
            <Tab.Navigator
            
            tabBarOptions={{
                activeTintColor:'white',
                inactiveTintColor:'#D3D3D3',
                style:{
                    backgroundColor:'black',
                    borderTopWidth:0,
                    borderTopColor:'#D3D3D3'
                },
                indicatorStyle: {
                    backgroundColor: 'red',
                },
            }
        }
            >
                <Tab.Screen 
                    name="Articles" component={Articles}
                   
                />
                <Tab.Screen name="Quick Tips" component={Tips} />
                <Tab.Screen name="Videos" component={Projects} />
                <Tab.Screen name="About" component={About}/>
            </Tab.Navigator>
            </View>
    )
}



export default HomeScreen

const tabOptions = {    
    tabBarOptions: {
        activeTintColor:'white',
        inactiveTintColor:'#D3D3D3',
        style:{
            backgroundColor:'green',
            borderTopWidth:1,
            borderTopColor:'#D3D3D3'
        },
        indicatorStyle: {
            backgroundColor: 'red',
        },
    },
}