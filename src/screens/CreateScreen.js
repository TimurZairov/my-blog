import React from "react";
import {Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import {Nav} from "../components/Nav";

export const CreateScreen =() => {
    return (
        <View style={styles.AndroidSaveArea}>
            <Nav/>
            <Text>
                Create
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative"
    },
});