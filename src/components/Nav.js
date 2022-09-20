import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {THEME} from "../theme";

export const Nav = () => {
    return (
        <View style={styles.nav}>
            <TouchableOpacity activeOpacity={0.5}>
                <Ionicons name={'menu'} size={32} color={THEME.MAIN_FONT_COLOR}/>
            </TouchableOpacity>
            <View style={styles.wrap}>
                <Ionicons name="search" size={30} color={THEME.MAIN_FONT_COLOR}/>
                <Image source={require('../../assets/images/avatar.jpg')} style={styles.imgAvatar}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    wrap: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    imgAvatar: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
})