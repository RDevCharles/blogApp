import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import Articles from './Articles';
import Projects from './Projects';
import Tips from './TipsScreen';
import About from './About';

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor:'black', }}>
            
            <Tab.Navigator
            
                tabBarOptions={
                    {
                        
                        pressOpacity: 0,
                    activeTintColor: 'white',
                    inactiveTintColor: '#D3D3D3',
                    
                    
                style:{
                    backgroundColor:'black',
                    
                    borderTopColor: 'black'
                    
                        },
                indicatorStyle: {backgroundColor:'red', color:'red',borderTopWidth:2},
                
            }
        }
            >
                <Tab.Screen 
                    
                    name="Articles" component={Articles}
                    options={{   tabBarIcon: 
                        (focused, tintColor) => (
                            <Image style={{
                                width: 20,
                                height: 20,
                               
                            }} source={{uri:"https://img.icons8.com/android/24/ffffff/home.png"}}/>
                        ),
                        pressOpacity: 0
                       
                            }}
                           
                        
                
                />
                <Tab.Screen name="Quick Tips" component={Tips} options={{   tabBarIcon: 
                        (focused, tintColor) => (
                            <Image style={{
                                width: 20,
                                height: 20,
                               
                            }} source={{uri:"https://img.icons8.com/ios-glyphs/30/ffffff/stack-of-coins.png"}}/>
                          )
                            }} />
                {/* <Tab.Screen name="Videos" component={Projects} /> */}
                <Tab.Screen name="About" component={About} options={{   tabBarIcon: 
                        (focused, tintColor) => (
                            <Image style={{
                                width: 20,
                                height: 20,
                               
                            }} source={{uri:"https://img.icons8.com/ios-glyphs/30/ffffff/information.png"
                        }}/>
                          )
                            }}/>
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