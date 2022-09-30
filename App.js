import React, {useEffect, useCallback} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from 'react-redux'
import store from "./src/store";

//components
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
        <Provider store={store}>
            <NavigationContainer onReady={onLayoutRootView}>
                <BottomTabNavigation />
            </NavigationContainer>
        </Provider>


    );
}
