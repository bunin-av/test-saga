import {PostType} from "./testStore/entities";

const GET_POSTS = '@posts/GET_POSTS'
const SET_POSTS = '@posts/SET_POSTS'
const REQUEST_POSTS = '@posts/REQUEST_POSTS'


type InitialState = typeof initialState
const initialState = {
    postsData: [] as PostType[]
}

type ActionTypes = ReturnType<typeof getPosts> | ReturnType<typeof setPosts>

export const postReducer1 = (state=initialState,
                            action: ActionTypes): InitialState => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const getPosts = () => ({
    type: GET_POSTS,
} as const)

export const setPosts = (postsData: any) => ({
    type: SET_POSTS,
    payload: {postsData} as InitialState
} as const)

export const fetchPosts = () => {
    return {
        type: REQUEST_POSTS
    }
}









