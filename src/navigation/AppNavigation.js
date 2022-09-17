import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Главная" component={MainScreen} options={{title: "Главная"}}/>
                <Stack.Screen name="Посты" component={PostScreen}/>
            </Stack.Navigator>
    )
}