import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';

import {BookMarkedScreen} from "../screens/BookMarkedScreen";
import {AppNavigation} from "./AppNavigation";
import {CreateScreen} from "../screens/CreateScreen";
import {AboutScreen} from "../screens/AboutScreen";


const Tab = createBottomTabNavigator();


export const BottomTabNavigation = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name='Главная' component={AppNavigation} options={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return <Ionicons name='home' size={26} color={focused ? '#1F5DE1' : '#C7CAC9'}/>
                }
            }}/>
            <Tab.Screen name='Избранное' component={BookMarkedScreen} options={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return <MaterialIcons name='favorite'  size={26} color={focused ? '#1F5DE1' : '#C7CAC9'}/>
                }
            }}/>

            <Tab.Screen name='Создать' component={CreateScreen} options={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return <Ionicons name='add-circle-sharp'  size={26} color={focused ? '#1F5DE1' : '#C7CAC9'}/>
                }
            }}/>

            <Tab.Screen name='Приложение' component={AboutScreen} options={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return <AntDesign name='appstore1'  size={26} color={focused ? '#1F5DE1' : '#C7CAC9'}/>
                }
            }}/>
        </Tab.Navigator>
    )
}