import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostScreen} from "../screens/PostScreen";
import React from "react";
//components
import {MainScreen} from "../screens/MainScreen";


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