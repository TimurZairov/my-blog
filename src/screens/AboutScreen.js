import React from "react";
import {Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import {Nav} from "../components/Nav";

export const AboutScreen =() => {
    return (
        <View style={styles.AndroidSaveArea}>
            <Nav/>
            <View style={styles.textStyle}>
                <Text style={{textAlign: 'center', fontFamily: 'rubik-medium'}} >
                    Это приложение написано впервые.{'\n'}
                    Версия приложениея 1.0.0
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    textStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});