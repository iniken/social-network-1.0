import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const Dialog = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <div className={s.dialog + " " + s.active}><NavLink to="/dialogs/1">Dimych</NavLink></div>
                    <div className={s.dialog + " " + s.active}><NavLink to="/dialogs/2">Andrey</NavLink></div>
                    <div className={s.dialog + " " + s.active}><NavLink to="/dialogs/3">Sveta</NavLink></div>
                    <div className={s.dialog + " " + s.active}><NavLink to="/dialogs/4">Sasha</NavLink></div>
                    <div className={s.dialog + " " + s.active}><NavLink to="/dialogs/5">Viktor</NavLink></div>
                    <div className={s.dialog + " " + s.active}><NavLink to="/dialogs/6">Valera</NavLink></div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How is your it-kamasutra?</div>
                    <div className={s.message}>How are you?</div>
                </div>
            </div>
        </div>
    )
}

export default Dialog;
