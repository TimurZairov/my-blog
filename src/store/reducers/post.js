import {LOAD_POSTS} from "../types";

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
        default: return state
    }


}