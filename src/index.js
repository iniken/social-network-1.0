import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {message: "Hi,how are you?", likesCount: "22"},
    {message: "Good", likesCount: "15"},
    {message: "How do you do?", likesCount: "2"},
    {message: "It is OK!!?", likesCount: "212"},
    {message: "how are you?", likesCount: "73"}
]
let dialogsData = [
    {id: "1", name: "Dimych"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "Sveta"},
    {id: "4", name: "Sasha"},
    {id: "5", name: "Viktor"},
    {id: "6", name: "Valera"}
];

let messagesData = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How is you it-kamasutra?"},
    {id: "3", message: "How are you?"},
    {id: "4", message: "What is your name?"},
    {id: "5", message: "Good!"},
    {id: "6", message: "Yo"}
];

ReactDOM.render(<App postsData={postsData}  dialogsData={dialogsData}  messagesData={messagesData}/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
