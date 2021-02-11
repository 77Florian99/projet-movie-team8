import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./MainNavigator";
import {TopRatedScreen} from "../screens/TopRatedScreen";
import { HomePage } from '../screen/HomePage';

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Home" component={HomePage} />
            <TabNavigator.Screen name="Search" component={SearchAndDetailNavigator} />
        </TabNavigator.Navigator>
    )
}
