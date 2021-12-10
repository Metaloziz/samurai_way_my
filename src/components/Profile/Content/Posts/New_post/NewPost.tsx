import React from "react";
import s from './New_Post.module.css'
import {ProfileItemsPT} from "../../../../../redux/_state";


type profilePagePT = {
    profilePage: ProfileItemsPT
}


export const NewPost = ({profilePage}: profilePagePT) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = () => {
        profilePage.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            profilePage.updateAddPost(text)
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