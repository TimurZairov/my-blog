import React from "react";
import { Platform, Text, View, StyleSheet, StatusBar, Image, ScrollView} from "react-native";
import {Nav} from "../components/Nav";
import {THEME} from "../theme";

export const PostScreen = ({navigation, route}) => {
    const {
        postId,
        body,
        title,
        favorite,
        url,
    } = route.params
    const goBackHandler = () => {
        navigation.navigate('Домой')
    }
    return (
        <View style={styles.AndroidSaveArea}>
            <Nav screenLocation={route.name} goBackHandler={goBackHandler} />
            <View style={styles.imageWrap}>
                <Image source={{
                    uri: url
                }} style={{
                    width: '100%',
                    height: 370
                }}/>
                <Text style={styles.bodyTitle}>{title}</Text>
            </View>
            <ScrollView style={styles.bodyWrapper}>
                <Text style={styles.bodyText}>
                    {body.repeat(10)}
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative"
    },
    imageWrap: {
        width: '100%',
        height: '50%',
        position: "relative"
    },
    bodyTitle: {
        position: 'absolute',
        zIndex: 10,
        bottom: 100,
        color: 'rgba(255,255,255,0.9)',
        fontSize: 25,
        marginLeft: 25,
    },
    bodyWrapper: {
        width: '100%',
        height: '50%',
        backgroundColor: THEME.WHITE_BG,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
    },
    bodyText: {
        padding: 30,
        fontFamily: 'rubik-light',
        fontSize: 20,
    }
})