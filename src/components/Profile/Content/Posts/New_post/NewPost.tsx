import React from "react";
import s from './New_Post.module.css'
import {addPostPT, ProfileItemsPT, updatePostPT} from "../../../../../redux/state";


export const NewPost = ({addPost, newPostText, updatePost}: addPostPT & ProfileItemsPT & updatePostPT) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = () => {
            addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            updatePost(text)
            console.log(text)
        }
    }

    return (
        <div className={s.item}>
            New Post
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={newPostText}/>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}