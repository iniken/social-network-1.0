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

let messagesData = [
    {id: "1", message: "Hi"},
    {id: "2", message: "How is you it-kamasutra?"},
    {id: "3", message: "How are you?"},
    {id: "4", message: "What is your name?"},
    {id: "5", message: "Good!"},
    {id: "6", message: "Yo"}
];

const Dialog = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                </div>
                <div className={s.messages}>
                    <MessageItem message={messagesData[0].message}/>
                    <MessageItem message={messagesData[1].message}/>
                    <MessageItem message={messagesData[2].message}/>
                    <MessageItem message={messagesData[3].message}/>
                    <MessageItem message={messagesData[4].message}/>
                    <MessageItem message={messagesData[5].message}/>
                </div>
            </div>
        </div>
    )
}

export default Dialog;
