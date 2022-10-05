import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {
    FlatList,
    Platform,
    StatusBar,
    StyleSheet, Text,
    View,
    ActivityIndicator
} from "react-native";

// components
import {FavoriteSlider} from "../components/FavoriteSlider";
import {Posts} from "../components/Posts";
import {Nav} from "../components/Nav";
import {BgComponent} from "../components/BgComponent";
import {loadPost} from "../store/reducers/actions/post";


export const MainScreen = ({navigation}) => {

    const [allPosts, setAllPosts] = useState([])

    const goToPosts = (post) => {
        navigation.navigate('Посты', {
            //так передаем данные в постов на другую страницу при переходе
            postId: post.id,
            body: post.body,
            title: post.title,
            favorite: post.favorite,
            url: post.url
        })
    }

    //Елси постов нет
    //вызывать внутри функционального компонента
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPost())
    }, [dispatch])


    //после дипспачт вызвать useSelector что бы обратиться к стэйту
    const posts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)

    useEffect(() => {
        setAllPosts(posts)
    }, [posts])
    // так делаем пока загружается приложение
    if(loading){
        return (
            <ActivityIndicator/>
        )
    }

    return (
        <View style={styles.AndroidSaveArea}>
            <BgComponent/>
            <Nav/>
            {allPosts.length > 0 ? <FlatList
                data={allPosts}
                keyExtractor={item => item.id}
                ListHeaderComponent={<FavoriteSlider/>}
                renderItem={({item}) => <Posts post={item} goToPosts={goToPosts}/>}
            /> : <Text style={{textAlign: 'center', marginTop: 100, fontFamily: 'rubik-light'}}>Тут пока нет постов</Text>}
        </View>

    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative"
    }
});
