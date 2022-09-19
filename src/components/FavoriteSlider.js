import React from "react";
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import {THEME} from "../theme";

export const FavoriteSlider =() => {
    return (
        <View style={styles.container}>
            <Text style={styles.blogText} >Мой Блог</Text>
            <Text style={styles.favoriteText}>Избранное</Text>
            <ScrollView style={styles.horizontalScroll} contentContainerStyle={styles.tabsWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.img} activeOpacity={0.6}>
                    <Image source={{
                        uri: 'https://krot.info/uploads/posts/2021-12/1638850063_9-krot-info-p-krasiveishie-peizazhi-prirodi-krasivie-fot-10.jpg'
                    }} style={{
                        width: 200,
                        height: 250,
                        // resizeMode: 'contain'
                    }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.img} activeOpacity={0.6}>
                    <Image source={{
                        uri: 'https://image3.thematicnews.com/uploads/images/68/22/63/92020/04/02/6e40dda100.jpg'
                    }} style={{
                        width: 200,
                        height: 250,
                        // resizeMode: 'contain'
                    }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.img} activeOpacity={0.6}>
                    <Image source={{
                        uri: 'https://phonoteka.org/uploads/posts/2021-09/1631660145_49-phonoteka-org-p-kartinki-dlya-fona-priroda-krasivo-52.jpg'
                    }} style={{
                        width: 200,
                        height: 250,
                        // resizeMode: 'contain'
                    }} />
                </TouchableOpacity>
            </ScrollView>
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