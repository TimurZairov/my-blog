import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Главная"
                    component={MainScreen}
                    options={{
                        headerShown: false
                    }}

                />
                <Stack.Screen name="Посты" component={PostScreen}/>
            </Stack.Navigator>
    )
}