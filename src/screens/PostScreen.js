import React from "react";
import {Button, Text, View} from "react-native";

export const PostScreen =({navigation}) => {
    return (
        <View>
            <Text>
                PostScreen
            </Text>
            <Button title='Go back' onPress={() => navigation.goBack('Главная')} />
        </View>
    )
}