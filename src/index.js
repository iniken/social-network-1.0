
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stateData, {addPost, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (stateData) => {
    ReactDOM.render(
        <BrowserRouter>
            <App stateApp={stateData} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter> ,  document.getElementById('root'));

}
rerenderEntireTree(stateData);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
