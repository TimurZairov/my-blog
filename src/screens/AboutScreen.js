import React from "react";
import {Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import {Nav} from "../components/Nav";

export const AboutScreen =() => {
    return (
        <View style={styles.AndroidSaveArea}>
            <Nav/>
            <Text>
                AboutScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative",
    },
});