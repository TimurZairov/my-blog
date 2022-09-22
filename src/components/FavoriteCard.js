import React from "react";
import {Image, Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import {Fontisto} from "@expo/vector-icons";

export const FavoriteCard = ({data}) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.imgContainer}>
                <Image source={{
                    uri: data.url,
                    width: '100%',
                    height: 300,
                }}/>
                <View style={styles.iconContainer}>
                    <Fontisto name='favorite' size={25} color='red'/>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>
                    {data.title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative",
    },
    wrapper: {
        paddingHorizontal: 25,
        marginBottom: 30
    },
    imgContainer: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
        position: 'relative',

    },
    iconContainer: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 15,
        right: 8
    },
    textContainer: {
        marginTop: 15
    },
    textTitle: {
        fontFamily: 'rubik-medium',
        fontSize: 20,
    }
})