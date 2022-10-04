// import {DATA} from "../../../../Data";
import {ADD_POST, ADD_TO_FAVORITE, FAVORITE_POSTS, LOAD_POSTS} from "../../types";
import {DB} from "../../../db";

//используем dispatch для запросов в базу данных
export const loadPost = () => {
    return async dispatch => {
        const posts = await DB.getPosts()
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
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
    return{
        type: ADD_TO_FAVORITE,
        payload: id
    }
}