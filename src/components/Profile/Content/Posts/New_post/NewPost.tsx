import React from "react";
import s from './New_Post.module.css'
import {NewPostPropsType} from "../../../../../redux/state";


export const NewPost = (props: NewPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = () => {
        // debugger
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            console.log(text)
        }
    }

    return (
        <div className={s.item}>
            New Post
            <div>
                <textarea ref={newPostElement}>some text</textarea>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}