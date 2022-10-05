import {DATA} from "../../../../Data";
import {ADD_POST, ADD_TO_FAVORITE, FAVORITE_POSTS, LOAD_POSTS} from "../../types";
//need to explore this
import {DB} from "../../../db";
import * as FileSystem from 'expo-file-system';

//используем dispatch для запросов в базу данных
export const loadPost = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA,
    }

}

export const favoritePosts = (id) => {
    return {
        type: FAVORITE_POSTS,
        payload: id
    }
}

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}


// обязательно делаем return иначе не работает не приходит id
export const addToFavorite = (id) => {
    return {
        type: ADD_TO_FAVORITE,
        payload: id
    }
}