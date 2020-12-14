import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Articles from './Articles';
import Projects from './Projects';
import Tips from './TipsScreen';
import About from './About';

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
    return (
        <View style={{flex:1}}>
            
            <Tab.Navigator>
                <Tab.Screen name="Articles" component={Articles} />
                <Tab.Screen name="Tips" component={Tips} />
                <Tab.Screen name="Projects" component={Projects} />
                <Tab.Screen name="About" component={About}/>
            </Tab.Navigator>
            </View>
    )
}

export default HomeScreen