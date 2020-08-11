import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";




const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialog = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name="Dimych"  id="1"/>
                    <DialogItem name="Andrey"  id="2"/>
                    <DialogItem name="Sveta"  id="3"/>
                    <DialogItem name="Sasha"  id="4"/>
                    <DialogItem name="Viktor"  id="5"/>
                    <DialogItem name="Valera"  id="6"/>
                </div>
                <div className={s.messages}>
                    <MessageItem message="Hi" />
                    <MessageItem message="How is you it-kamasutra?" />
                    <MessageItem message="How are you?" />
                </div>
            </div>
        </div>
    )
}

export default Dialog;
