import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const MainScreen =() => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'rubik-light', fontSize: 30}}>
                Мой блог
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
