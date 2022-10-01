import {DATA} from "../../../../Data";
import {LOAD_POSTS} from "../../types";

export const loadPost = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
    }
}