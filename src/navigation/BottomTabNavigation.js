import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

import {BookMarkedScreen} from "../screens/BookMarkedScreen";
import {AppNavigation} from "./AppNavigation";
import {MainScreen} from "../screens/MainScreen";


const Tab = createBottomTabNavigator();


export const BottomTabNavigation = () => {

    return (
        <Tab.Navigator
        // screenOptions={({navigation}) => ({
        //     tabBarIcon: () => {
        //         return <Ionicons name='home' size={26}/>
        //     }
        // })}
        >
            <Tab.Screen name='Главная' component={AppNavigation} options={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: () => {
                    return <Ionicons name='home' size={26}/>
                }
            }}/>
            <Tab.Screen name='Избранное' component={BookMarkedScreen} options={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: () => {
                    return <MaterialIcons name='favorite'  size={26}/>
                }
            }}/>
        </Tab.Navigator>
    )
}