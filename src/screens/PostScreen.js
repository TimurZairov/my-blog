import React, {useEffect, useState} from "react";
import {Platform, Text, View, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity} from "react-native";
import {Nav} from "../components/Nav";
import {THEME} from "../theme";
import {BgComponent} from "../components/BgComponent";
import {Fontisto} from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from "../store/reducers/actions/post";

export const PostScreen = ({navigation, route}) => {
    const {
        postId,
        body,
        title,
        favorite,
        url,
    } = route.params
    const [color, setColor] = useState('white')

    console.log(favorite)
    const goBackHandler = () => {
        navigation.navigate('Домой')
    }

    const dispatch = useDispatch()
    //add to favorite


    const addFavorite = (id) => {
        dispatch(addToFavorite(id))
    }

    useEffect(() => {

    }, [route.params.favorite, navigation, addFavorite])


    return (
        <View style={styles.AndroidSaveArea}>
            <BgComponent/>
            <Nav screenLocation={route.name} goBackHandler={goBackHandler}/>
            <View style={styles.imageWrap}>
                <Image source={{
                    uri: url
                }} style={{
                    width: '100%',
                    height: 370
                }}/>
                <TouchableOpacity style={styles.favIcon} activeOpacity={0.6} onPress={() => addFavorite(postId)}>
                    <Fontisto name='favorite' size={32} color={favorite ? 'red' : "white"}/>
                </TouchableOpacity>
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
        position: "relative",
    },
    favIcon: {
        width: 32,
        height: 32,
        position: 'absolute',
        right: 10,
        top: 20
    },
    bodyTitle: {
        position: 'absolute',
        zIndex: 10,
        bottom: 40,
        color: 'rgba(255,255,255,0.9)',
        fontSize: 25,
        marginLeft: 25,
    },
    bodyWrapper: {
        width: '100%',
        height: '45%',
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