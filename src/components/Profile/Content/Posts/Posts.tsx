import React from "react";
import style from './Posts.module.css'
import {ProfileItemsPT,} from "../../../../redux/store";
import {OldPost} from "./Old_post/OldPost";

export type NewPostPT = {
    profilePage: ProfileItemsPT
    addNewPost: () => void
    changePost: (newText: string) => void
}


export const Posts = ({profilePage, addNewPost, changePost}: NewPostPT) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewItem = () => {
        if (newPostElement.current?.value) {                // check empty
            addNewPost()
        }
    }

    const changeItem = () => {
        if (newPostElement.current) {                        // check empty
            changePost(newPostElement.current.value)
        }
    }

    return (
        <div className={style.content}>
            <div className={style.item}>
                New Post
                <div>
                <textarea onChange={changeItem}
                          ref={newPostElement}
                          value={profilePage.newPostText}
                          placeholder={'You Can type some'}/>
                    <div>
                        <button onClick={addNewItem}>Add post</button>
                    </div>
                </div>
                {profilePage.postData.map(item => <OldPost message={item.message}
                                                        like={item.like}
                                                        comment={item.comment}/>)}
            </div>
        </div>
    )
}
