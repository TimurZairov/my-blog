import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

import {BookMarkedScreen} from "../screens/BookMarkedScreen";
import {AppNavigation} from "./AppNavigation";


const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {


    return (
        <Tab.Navigator>
            <Tab.Screen name='Главная' component={AppNavigation} options={{
                tabBarActiveTintColor: '#1F5DE1',
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Ionicons name="home" size={24} color={focused ? '#1F5DE1' : '#8A8F93' }/>
                )
            }}/>
            <Tab.Screen name='Избранное' component={BookMarkedScreen} options={{
                tabBarActiveTintColor: '#1F5DE1',
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <MaterialIcons name="favorite" size={24} color={focused ? '#1F5DE1' : '#8A8F93' }/>
                )

            }}/>
        </Tab.Navigator>
    )
}