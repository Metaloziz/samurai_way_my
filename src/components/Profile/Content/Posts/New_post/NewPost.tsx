import React from "react";
import s from './New_Post.module.css'
import {addPostFromStatePT, ProfileItemsPT, updateNewPostTextPT} from "../../../../../redux/state";


export const NewPost = ({addPost, newPostText, updateText}: addPostFromStatePT & ProfileItemsPT & updateNewPostTextPT) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = () => {
            addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            updateText(text)
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