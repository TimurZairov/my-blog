import React, {useEffect, useState} from "react";
import {View, StyleSheet, Platform, StatusBar, FlatList, LogBox, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Nav} from "../components/Nav";
import {BgComponent} from "../components/BgComponent";
import {FavoriteCard} from "../components/FavoriteCard";
import {favoritePosts} from "../store/reducers/actions/post";


export const BookMarkedScreen = () => {
    //мы сделали уже фильтр в reducers/post и через селектор обращаемся к ним
    const items = useSelector(state => state.post.bookedPosts)
    const [favoriteItem, setFavoriteItem] = useState([])
    const dispatch = useDispatch()

    const toggleHandler = (id) => {
        const favorite = favoriteItem.filter(item => {
            if (item.id === id) {
                item.favorite = false
                return item
            }
        })
        dispatch(favoritePosts(favorite[0].id))
    }

    useEffect(() => {
        setFavoriteItem(items)
    }, [items, dispatch])

    return (
        <View style={styles.AndroidSaveArea}>
            <BgComponent/>
            <Nav/>
            {favoriteItem.length > 0 ? <FlatList keyExtractor={item => item.id} data={favoriteItem}
                                                 renderItem={({item}) => <FavoriteCard data={item}
                                                                                       toggleHandle={toggleHandler}/>}/> :
                <Text style={{textAlign: 'center', marginTop: 100, fontFamily: 'rubik-light'}}>Вы ничего не выбрали</Text>}

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