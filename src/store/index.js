import {createStore, combineReducers, applyMiddleware } from 'redux'
//redux thunk позволяет редаксу делать асинхронные запросы
// applyMiddleware библиотека и передаем туда thunk
import thunk from "redux-thunk";
import {postReducer} from "./reducers/post";

const rootReducer = combineReducers({
    post: postReducer
})
export default createStore(rootReducer, applyMiddleware(thunk))