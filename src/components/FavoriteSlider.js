import React from "react";
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import {THEME} from "../theme";
import {Tabs} from "./Tabs";
import {DATA} from "../../Data";

export const FavoriteSlider =() => {

    return (
        <View style={styles.container}>
            <Text style={styles.blogText} >Блог Сусаны</Text>
            <Text style={styles.favoriteText}>Избранное</Text>

            <ScrollView style={styles.horizontalScroll}  horizontal={true} showsHorizontalScrollIndicator={false}>
                {DATA ? DATA.map((item, i) => {
                    if(item.favorite){
                        return (
                            <View style={styles.img} activeOpacity={0.6} key={i}>
                                <Image source={{
                                    uri: item.url
                                }} style={{
                                    width: 200,
                                    height: 250,
                                }} />
                            </View>
                        )
                    }
                }) : []}
            </ScrollView>
            <Tabs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingStart: 22,
        marginTop: 15
    },
    blogText: {
        fontFamily: 'rubik-light',
        fontSize: 20,
        color: THEME.POST_FONT_COLOR,
        opacity: 0.7
    },
    favoriteText: {
        marginTop: 8,
        fontFamily: 'rubik-medium',
        fontSize: 30,
        color: THEME.MAIN_FONT_COLOR
    },
    horizontalScroll: {
        height: 280,
        flexDirection: 'row'
    },
    img: {
        marginTop:  20,
        width: 200,
        height: 250,
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 3,
        marginRight: 15,
    }
})