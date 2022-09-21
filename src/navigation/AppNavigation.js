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
                <Stack.Group>
                    <Stack.Screen
                        name="Номе"
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