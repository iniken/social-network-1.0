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

let postElements = postsData.map( postMap =>
    <Post mes={postMap.message} like={postMap.likesCount}/>
)

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
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

