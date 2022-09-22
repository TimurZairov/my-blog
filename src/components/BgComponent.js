import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import {THEME} from "../theme";
import {StyleSheet} from "react-native";

export const BgComponent = () => {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[THEME.MAIN_BG, THEME.WHITE_BG]}
            style={styles.background}
            start={{
                x: 0.2499,
                y: 0
            }}
            end={{
                x: 0.25,
                y: 0.0
            }}
        />
    )
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});