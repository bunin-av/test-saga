import {createAsyncAction} from "typesafe-actions";
import {PostType} from "./entities";


const POSTS_REQUEST = '@testStore/REQUEST_POSTS'
const POSTS_SUCCESS = '@testStore/POSTS_SUCCESS'
const POSTS_FAILURE = '@testStore/POSTS_FAILURE'

export const requestPostsSync = createAsyncAction(POSTS_REQUEST,
    POSTS_SUCCESS,
    POSTS_FAILURE)<undefined, PostType[], Error>()
