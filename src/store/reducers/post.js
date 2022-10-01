import {FAVORITE_POSTS, LOAD_POSTS} from "../types";

const initialState = {
    allPosts: [],
    bookedPosts: []
} //создаем стэйт


//post reducer

export const postReducer = (state = initialState, action ) => {
    switch (action.type){
        case LOAD_POSTS: return {...state, allPosts: action.payload, bookedPosts: action.payload.filter( post => {
            return post.favorite
            })}
        case FAVORITE_POSTS: return {...state, bookedPosts: state.bookedPosts.filter(item => item.id !== action.payload)}

        default: return state
    }


}