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
                <Post message="Hi,how are you?"/>
                <Post message="It is mz first post"/>



            </div>
        </div>
    )
}

export default MyPosts;