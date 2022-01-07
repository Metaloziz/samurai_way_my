import React from "react";
import style from './Posts.module.css'
import {OldPost} from "./Old_post/OldPost";
import {ProfilePT} from "../../Profile";

export type NewPostPT = {
    profilePage: ProfileItemsPT
    addPostAC: () => void
    changePostAC: (newText: string) => void
    addLikeAC: (postID: string) => void
}
export type ProfileItemsPT = {
    postData: Array<PostDataPT>
    newPostText: string
    profile: ProfilePT
}
export type PostDataPT = {
    id: string
    message: string
    like: number
    comment: number
}


export const Posts = ({profilePage, addPostAC, changePostAC, addLikeAC}: NewPostPT) => {

    //--------------------------ref------------------------------
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    //--------------------------ref------------------------------

    const addNewItem = () => {
        if (newPostElement.current?.value) {                // check empty
            addPostAC()
        }
    }

    const changeItem = () => {
        if (newPostElement.current) {                        // check empty
            changePostAC(newPostElement.current.value)
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
                {profilePage.postData.map((item, index) => <OldPost
                    addLike={() => addLikeAC(item.id)}
                    key={index} message={item.message}
                    like={item.like}
                    comment={item.comment}/>)}
            </div>
        </div>
    )
}
