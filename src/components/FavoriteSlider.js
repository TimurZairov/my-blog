import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import {THEME} from "../theme";

export const FavoriteSlider =() => {
    return (
        <View style={styles.container}>
            <Text style={styles.blogText} >Мой Блог</Text>
            <Text style={styles.favoriteText}>Избранное</Text>
            <View style={styles.horizontalScroll}>
                <View style={styles.img}>
                    <Image source={{
                        uri: 'https://c.wallhere.com/photos/cd/d9/1867x1080_px_church_clouds_Fall_field_forest_grass_Hills-811385.jpg!d'
                    }} style={{
                        width: 200,
                        height: 250,
                        // resizeMode: 'contain'
                    }} />
                </View>

                <View style={styles.img}>
                    <Image source={{
                        uri: 'https://image3.thematicnews.com/uploads/images/68/22/63/92020/04/02/6e40dda100.jpg'
                    }} style={{
                        width: 200,
                        height: 250,
                        // resizeMode: 'contain'
                    }} />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginTop: 15
    },
    blogText: {
        fontFamily: 'rubik-medium',
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
        height: 250,
        flexDirection: 'row'
    },
    img: {
        marginTop:  20,
        width: 200,
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 13,
        marginRight: 15,
    }
})