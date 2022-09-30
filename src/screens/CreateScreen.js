import React from "react";
import {Button, Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import {Nav} from "../components/Nav";




export const CreateScreen = ({ navigation, route }) => {

    return (
        <View style={styles.AndroidSaveArea}>
            <Nav screenLocation={route.name}/>
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