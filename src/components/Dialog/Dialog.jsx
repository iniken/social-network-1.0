import React from 'react';
import s from "./Dialog.module.css"

const Dialog = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                        <div className={s.dialog + " " + s.active}>Dimych</div>
                        <div className={s.dialog}>Andrey</div>
                        <div className={s.dialog}>Sveta</div>
                        <div className={s.dialog}>Sasha</div>
                        <div className={s.dialog}>Viktor</div>
                        <div className={s.dialog}>Valera</div>
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
