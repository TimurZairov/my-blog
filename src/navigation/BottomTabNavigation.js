import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainScreen} from "../screens/MainScreen";
import {BookMarkedScreen} from "../screens/BookMarkedScreen";


const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Главная' component={MainScreen}  options={{
                headerShown: false
            }} />
            <Tab.Screen name='Избранное' component={BookMarkedScreen}/>
        </Tab.Navigator>
    )
}