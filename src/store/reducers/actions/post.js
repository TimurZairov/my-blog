import {DATA} from "../../../../Data";
import {ADD_POST, FAVORITE_POSTS, LOAD_POSTS} from "../../types";

export const loadPost = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
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