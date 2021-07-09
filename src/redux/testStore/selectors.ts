import {RootState} from "../rootReducer";
import {createSelector} from "reselect";

export const getPosts = (state: RootState) => state.posts

export const getPostsData = createSelector(getPosts,
    ({postsData}) => postsData)