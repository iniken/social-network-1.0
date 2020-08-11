import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPostsBlock}>
           <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>


            <div className={s.posts}>
                <Post message="Hi,how are you?" likesCount="22"/>
                <Post message="It is mz first post" likesCount="67"/>
            </div>
        </div>
    )
}

export default MyPosts;