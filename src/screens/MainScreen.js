import React from "react";
import {
    FlatList,
    Platform,
    StatusBar,
    StyleSheet,
    View
} from "react-native";

// components
import {FavoriteSlider} from "../components/FavoriteSlider";
import {Posts} from "../components/Posts";
//Data
import {DATA} from "../../Data";
import {Nav} from "../components/Nav";
import {BgComponent} from "../components/BgComponent";


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
            <BgComponent />
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
});
