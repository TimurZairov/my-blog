import {useEffect, useCallback} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//components
import {MainScreen} from "./src/screens/MainScreen";
import {PostScreen} from "./src/screens/PostScreen";


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

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer onReady={onLayoutRootView} >
            <Stack.Navigator>
                <Stack.Screen name="Главная" component={MainScreen} options={{title: "Главная"}}/>
                <Stack.Screen name="Посты" component={PostScreen}/>
            </Stack.Navigator>

        </NavigationContainer>

    );
}