import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "./redux/rootReducer";
import {getPostsData} from "./redux/testStore/selectors";
import {requestPostsSync} from "./redux/testStore/actions";


function App() {
    const posts = useSelector(getPostsData)
    const dispatch: AppDispatch = useDispatch()

    const getData = ()=> dispatch(requestPostsSync.request())

    return (
        <div className="App">
            <button onClick={getData}>Download</button>
            {posts.map(el => (
                <>
                    <h2>{el.title}</h2>
                    <p>{el.body}</p>
                </>
            ))}
        </div>
    )
}

export default App;
