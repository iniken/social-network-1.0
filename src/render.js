import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


 export let rerenderEntireTree = (stateData) => {
    ReactDOM.render(
        <BrowserRouter>
            <App stateApp={stateData} addPost={addPost}/>
        </BrowserRouter> ,  document.getElementById('root'));

}


