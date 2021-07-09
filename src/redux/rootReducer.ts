import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {postsReducer} from "./testStore/reducer";
import {watchGetPosts} from "./testStore/effects";

const sagaMiddleware = createSagaMiddleware()
export const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchGetPosts)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

