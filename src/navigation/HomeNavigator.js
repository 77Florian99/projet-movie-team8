import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {GenreListScreen} from "../screen/GenreListScreen";
import {HomePage} from "../screen/HomePage";
import {DetailScreen} from "../screen/DetailScreen";


const Stack = createStackNavigator()

export const HomeNavigator = () => {
    return (

            <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomePage}/>
                <Stack.Screen name="GenreList" component={GenreListScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
            </Stack.Navigator>
    )
}
