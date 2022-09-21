import React from "react";
import {
    FlatList,
    Platform,
    StatusBar,
    StyleSheet,
    View
} from "react-native";
import {THEME} from "../theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';
// components
import {FavoriteSlider} from "../components/FavoriteSlider";
import {Posts} from "../components/Posts";
//Data
import {DATA} from "../../Data";
import {Nav} from "../components/Nav";


export const MainScreen = ({navigation}) => {
    const goToPosts = (post) => {
        navigation.navigate('Посты',{
            postId: post.id,
            body: post.body,
            title: post.title,
            favorite: post.favorite,
            url: post.url
        })
    }

    return (
        <View style={styles.AndroidSaveArea}>
            <LinearGradient
                // Background Linear Gradient
                colors={[THEME.MAIN_BG, THEME.WHITE_BG]}
                style={styles.background}
                start={{
                    x: 0.2499,
                    y: 0
                }}
                end={{
                    x: 0.25,
                    y: 0.0
                }}
            />
            <Nav />
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                ListHeaderComponent={<FavoriteSlider/>}
                renderItem={({item}) =><Posts post={item} goToPosts={goToPosts}/>}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative"
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});
