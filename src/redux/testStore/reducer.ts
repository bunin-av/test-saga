import {InitialState, PostType} from "./entities";
import {createReducer, getType} from "typesafe-actions";
import {requestPostsSync} from "./actions";


const initialState = {
    postsData: [],
    loading: false,
    error: null,
}

export const postsReducer = createReducer<InitialState>(initialState, {
    [getType(requestPostsSync.request)]: (state) =>
        ({...state, loading: true}),
    [getType(requestPostsSync.success)]: (state, {payload}: { payload: PostType[] }) =>
        ({...state, postsData: payload, error: null}),
    [getType(requestPostsSync.failure)]: (state, {payload}) =>
        ({...state, error: payload})
})