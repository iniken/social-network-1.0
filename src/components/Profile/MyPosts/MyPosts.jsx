import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

let postsData = [
    {message: "Hi,how are you?", likesCount: "22"},
    {message: "Good", likesCount: "15"},
    {message: "How do you do?", likesCount: "2"},
    {message: "It is OK!!?", likesCount: "212"},
    {message: "how are you?", likesCount: "73"}
]

const MyPosts = (props) => {

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
                <Post mes={postsData[0].message} like={postsData[0].likesCount}/>
                <Post mes={postsData[1].message} like={postsData[1].likesCount}/>
                <Post mes={postsData[2].message} like={postsData[2].likesCount}/>
                <Post mes={postsData[3].message} like={postsData[3].likesCount}/>
                <Post mes={postsData[4].message} like={postsData[4].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;

