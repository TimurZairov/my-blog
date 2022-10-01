import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
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
import {Nav} from "../components/Nav";
import {BgComponent} from "../components/BgComponent";
import {loadPost} from "../store/reducers/actions/post";


export const MainScreen = ({navigation}) => {
    const goToPosts = (post) => {
        navigation.navigate('Посты', {
            postId: post.id,
            body: post.body,
            title: post.title,
            favorite: post.favorite,
            url: post.url
        })
    }
    //вызывать внутри функционального компонента
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPost())
    }, [dispatch])
    //после дипспачт вызвать useSelector что бы обратиться к стэйту
    const allPosts = useSelector(state => state.post.allPosts)
    return (
        <View style={styles.AndroidSaveArea}>
            <BgComponent/>
            <Nav/>
            <FlatList
                data={allPosts}
                keyExtractor={item => item.id}
                ListHeaderComponent={<FavoriteSlider/>}
                renderItem={({item}) => <Posts post={item} goToPosts={goToPosts}/>}
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
