import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Image, Platform, StatusBar, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {Fontisto} from "@expo/vector-icons";
import {favoritePosts} from '../store/reducers/actions/post'

export const FavoriteCard = ({data, toggleHandle}) => {


    return (
        <View style={styles.wrapper}>
            <View style={styles.imgContainer}>
                <Image source={{
                    uri: data.url,
                    width: '100%',
                    height: 300,
                }}/>
                <TouchableOpacity style={styles.iconContainer} onPress={() => toggleHandle(data.id)}>
                    <Fontisto name='favorite' size={25} color='red'/>
                </TouchableOpacity>
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