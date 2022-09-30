import React from "react";
import { View, StyleSheet, Platform, StatusBar, FlatList} from "react-native";
import {Nav} from "../components/Nav";
import {BgComponent} from "../components/BgComponent";
import {DATA} from "../../Data";
import {FavoriteCard} from "../components/FavoriteCard";


export const BookMarkedScreen = () => {
    const favoriteItem = DATA.filter(item => {
        return item.favorite
    })
    return (
        <View style={styles.AndroidSaveArea}>
            <BgComponent/>
            <Nav/>
            <FlatList keyExtractor={item => item.id} data={favoriteItem} renderItem={({item}) => <FavoriteCard data={item}/>} />
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
        paddingHorizontal: 25
    },
    imgContainer: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
        position: 'relative'
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
        fontSize: 25,
        textAlign: 'center'
    }
})