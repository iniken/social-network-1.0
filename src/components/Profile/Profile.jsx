import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://www.tropicbreeze.co.uk/blog/wp-content/uploads/2017/08/Nisbet-Plantation-1200-500.jpg"/>
            <div>Ava + description</div>
           <MyPosts />
        </div>
    )
}

export default Profile;