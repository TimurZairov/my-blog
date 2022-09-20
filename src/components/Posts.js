import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity, FlatList} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import {THEME} from "../theme";

export const Posts = ({item}) => {
    const date = new Date().toLocaleDateString()


    return (

        <View style={styles.container}>
            {item ? (
                <TouchableOpacity style={styles.card} activeOpacity={.8}>
                    <View>
                        <Image source={{
                            uri: item.url
                        }} style={{
                            width: 90,
                            height: 80,
                            borderRadius: 5
                        }}/>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.postTitle}>
                            {item.title && item.title.length > 50 ? item.title.slice(0, 49) : item.title}
                        </Text>
                        <View style={styles.postTime}>
                            <AntDesign name='clockcircleo' size={15} color={THEME.POST_FONT_COLOR}/>
                            <Text style={styles.postDate}>{date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ): <Text>Тут пока пусто</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25
    },
    card: {
        width: '100%',
        height: 100,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 5
    },
    titleContainer: {
        width: '68%',
        height: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    postTitle: {
        fontFamily: 'rubik-medium',
        fontSize: 15
    },
    postTime: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    postDate: {
        marginLeft: 5,
        fontSize: 15,
        color: THEME.POST_FONT_COLOR
    }
})