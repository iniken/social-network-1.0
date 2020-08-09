import React from 'react';
import s from "./Content.module.css"

const Content = () => {
    return (
        <div className={s.content}>
            <img
                src="https://www.tropicbreeze.co.uk/blog/wp-content/uploads/2017/08/Nisbet-Plantation-1200-500.jpg"/>
            <div>Ava + description</div>
            <div>
                My post
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div >post 2</div>
                    <div>post 3</div>
                    <div className={s.item}>post 4</div>
                </div>
            </div>
        </div>
    )
}

export default Content;