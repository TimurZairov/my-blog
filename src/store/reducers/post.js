import {ADD_POST, FAVORITE_POSTS, LOAD_POSTS} from "../types";

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
        case ADD_POST: return {
            ...state, allPosts: [action.payload, ...state.allPosts] //что бы пушить в массив стаэйта берем все в массив
        }
        default: return state
    }


}