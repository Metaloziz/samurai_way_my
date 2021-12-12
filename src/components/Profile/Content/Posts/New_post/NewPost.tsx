import React from "react";
import s from './New_Post.module.css'
import {
    addPostATPT,
    addPostAC,
    updateAddTextPostATPT,
    ProfileItemsPT,
    updateAddTextPostAC
} from "../../../../../redux/_state";


type NewPostPT = {
    profilePage: ProfileItemsPT
    dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
}


export const NewPost = ({profilePage, dispatch}: NewPostPT) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = () => {
        if (newPostElement.current?.value) {                 // check empty
            dispatch(addPostAC())                        // AC - action creator
        }
    }


    let ChangePost = () => {
        if (newPostElement.current) {                        // check empty
            let newText = newPostElement.current.value
            dispatch(updateAddTextPostAC(newText))              // AC - action creator
            console.log(newText)
        }
    }

    return (
        <div className={s.item}>
            New Post
            <div>
                <textarea onChange={ChangePost}
                          ref={newPostElement}
                          value={profilePage.newPostText}
                          placeholder={'You Can type some'}/>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}