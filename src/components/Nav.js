import React from "react";
import {Image, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {THEME} from "../theme";

export const Nav = ({screenLocation, goBackHandler}) => {
    return (
        <View style={styles.nav}>
            {screenLocation === 'Посты' ? (
                <View style={styles.goBack}>
                    <TouchableOpacity activeOpacity={0.5} onPress={goBackHandler}>
                        <Ionicons name="chevron-back" size={32} color={THEME.MAIN_FONT_COLOR}/>
                    </TouchableOpacity>
                </View>

            ) : (
                <>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Ionicons name={'menu'} size={32} color={THEME.MAIN_FONT_COLOR}/>
                    </TouchableOpacity>
                    <View style={styles.wrap}>
                        <TouchableOpacity>
                            <Ionicons name="ios-camera" size={30} color={THEME.MAIN_FONT_COLOR}/>
                        </TouchableOpacity>
                        <Image source={require('../../assets/images/avatar.jpg')} style={styles.imgAvatar}/>
                    </View>
                </>

            )}

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
    goBack: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        alignItems: "center",
        justifyContent: "center"
    }
})