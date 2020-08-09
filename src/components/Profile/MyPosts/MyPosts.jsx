import React from 'react';
import "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="Hi,how are you?" likesCount="22"/>
                <Post message="It is mz first post" likesCount="67"/>
            </div>
        </div>
    )
}

export default MyPosts;