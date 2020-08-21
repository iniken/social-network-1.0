import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.postsData.map( postMap =>
        <Post mes={postMap.message} like={postMap.likesCount}/>
    )
    let newPostElement= React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value
     alert(text)
    }
    return (
        <div className={s.myPostsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;

