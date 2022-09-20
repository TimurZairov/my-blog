import React, {useEffect, useCallback} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import {NavigationContainer} from "@react-navigation/native";

//components
import {AppNavigation} from "./src/navigation/AppNavigation";
import {BottomTabNavigation} from "./src/navigation/BottomTabNavigation";


export default function App() {
    const [fontsLoaded] = useFonts({
        'rubik-light': require('./assets/fonts/Rubik-Light.ttf'),
        'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <NavigationContainer onReady={onLayoutRootView}>
                <AppNavigation />
            </NavigationContainer>
        </>


    );
}
