import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {BookMarkedScreen} from "../screens/BookMarkedScreen";
import React from "react";

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
    return (
        <>
            <Stack.Navigator>
                    <Stack.Screen
                        name="Домой"
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
            </Stack.Navigator>
        </>

    )
}