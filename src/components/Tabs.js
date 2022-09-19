import React from "react";
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {THEME} from "../theme";


export const Tabs = () => {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.tabsWrapper} horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                    <Text style={[styles.tabItem, styles.active]}>Последнее добавленное</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 22,
        marginTop: 5,
        height: 50,
    },
    tabsWrapper: {
        height: 30,
        alignItems: 'center'
    },
    tabItem: {
        fontSize: 18,
        color: THEME.POST_FONT_COLOR,
        fontFamily: 'rubik-light',
        marginRight: 30,
        opacity: 0.9,
    },
    active: {
        color: THEME.MAIN_FONT_COLOR,
    }
})