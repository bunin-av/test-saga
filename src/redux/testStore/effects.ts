import {call, put, takeEvery} from 'redux-saga/effects'
import {requestPostsSync} from "./actions";
import {PostType} from "./entities";

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return response.json()
}

export function* getPostsAsync() {
    try {
        const data: PostType[] = yield call(fetchPosts)
        yield put(requestPostsSync.success(data))
    } catch (e) {
        yield put(requestPostsSync.failure(e))
    }
}

export function* watchGetPosts() {
    yield takeEvery(requestPostsSync.request, getPostsAsync)
}