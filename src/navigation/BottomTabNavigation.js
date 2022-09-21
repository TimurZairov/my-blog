import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import {BookMarkedScreen} from "../screens/BookMarkedScreen";
import {AppNavigation} from "./AppNavigation";


const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {

    const colorIcon = () => {

    }


    return (
        <Tab.Navigator>
            <Tab.Screen name='Главная' component={AppNavigation} options={{
                tabBarActiveTintColor: '#1F5DE1',
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicons name="home" size={24}/>
                )
            }}/>
            <Tab.Screen name='Избранное' component={BookMarkedScreen} options={{
                tabBarActiveTintColor: '#1F5DE1',
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,

            }}/>
        </Tab.Navigator>
    )
}