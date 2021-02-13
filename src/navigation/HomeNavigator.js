import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {GenreListScreen} from "../screen/GenreListScreen";
import {HomePage} from "../screen/HomePage";
import {DetailScreen} from "../screen/DetailScreen";
import {MainBottomNavigator} from "./MainBottomNavigator";

const Stack = createStackNavigator()

export const HomeNavigator = () => {
    return (

                <Stack.Navigator>
                
                <Stack.Screen name="Recherche" component={MainBottomNavigator} options={{headerShown: false}} />
                <Stack.Screen name="GenreList" component={GenreListScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
         
              </Stack.Navigator>
    )
}
