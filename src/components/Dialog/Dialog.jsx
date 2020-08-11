import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

let dialogsData = [
    {id: "1", name: "Dimych"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "Sveta"},
    {id: "4", name: "Sasha"},
    {id: "5", name: "Viktor"},
    {id: "6", name: "Valera"}
];
let dialogsElements = dialogsData.map(dialogMap =>
    <DialogItem name={dialogMap.name} id={dialogMap.id}/>
);

let messagesData = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How is you it-kamasutra?"},
    {id: "3", message: "How are you?"},
    {id: "4", message: "What is your name?"},
    {id: "5", message: "Good!"},
    {id: "6", message: "Yo"}
];

let messagesElements = messagesData.map(messageMap =>
    <MessageItem message={messageMap.message}/>
);

const Dialog = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialog;
