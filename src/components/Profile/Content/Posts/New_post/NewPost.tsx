import React from "react";
import s from './New_Post.module.css'
import {ProfileItemsPT} from "../../../../../redux/_state";


type NewPostPT = {
    profilePage: ProfileItemsPT
    addPost: () => void
    updateAddPost: (message: string) => void
}


export const NewPost = ({profilePage,addPost, updateAddPost}: NewPostPT) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = () => {
        addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            updateAddPost(text)
            console.log(text)
        }
    }

    return (
        <div className={s.item}>
            New Post
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={profilePage.newPostText}/>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}