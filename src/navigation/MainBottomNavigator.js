import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SearchScreen from "../screen/SearchScreen";
import { HomePage } from '../screen/HomePage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        <TabNavigator.Navigator initialRouteName="Home"
        activeColor="#B5A90F"
        inactiveColor="white"
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: '#B00020' }}>
            <TabNavigator.Screen name='Home' component={HomePage} options={{
          tabBarLabel: '',
          tabBarIcon: (color) => (
            <MaterialCommunityIcons name="home"  color={color} size={26} />
          ),
        }} />
            <TabNavigator.Screen name="Search" component={SearchScreen} options={{
          tabBarLabel: '',
          tabBarIcon: (color) => (
            <MaterialCommunityIcons name="movie-search" color={color} size={26} />
          ),
        }} />
        </TabNavigator.Navigator>
    )
}
