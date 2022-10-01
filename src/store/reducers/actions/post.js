import {DATA} from "../../../../Data";
import {FAVORITE_POSTS, LOAD_POSTS} from "../../types";

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