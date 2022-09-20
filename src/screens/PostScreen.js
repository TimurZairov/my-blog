import React from "react";
import {Button, Text, View} from "react-native";

export const PostScreen = ({navigation, route}) => {
    const {
        postId,
        body,
        title,
        favorite,
        url
    } = route.params

    return (
        <View>
            <Text>
                {body}
            </Text>
            <Button title='Go back' onPress={() => navigation.goBack('Главная')}/>
        </View>
    )
}