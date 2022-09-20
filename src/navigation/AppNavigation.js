import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {BookMarkedScreen} from "../screens/BookMarkedScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen
                        name="Главная"
                        component={MainScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Посты"
                        component={PostScreen}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="Избранное"
                        options={{
                            headerShown: false
                        }}
                        getComponent={BookMarkedScreen}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </>

    )
}