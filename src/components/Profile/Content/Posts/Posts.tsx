import React from "react";
import style from './Posts.module.css'
import {OldPost} from "./Old_post/OldPost";
import {initialStateProfileType} from "../../../../redux/profile_reducer";
import {PostForm, PostsReduxFormType} from "./PostsForm/PostsForm";

export type NewPostPT = {
    profilePage: initialStateProfileType
    addPostAC: (value: string) => void
    addLikeAC: (postID: string) => void
}


export const Posts = ({profilePage, addPostAC, addLikeAC}: NewPostPT) => {

    const addNewItem = (data: PostsReduxFormType) => {


        if (data.textPost) {              // check empty
            addPostAC(data.textPost.trim())
        } else {
            console.warn('field is empty')
        }
    }

    return (
        <div className={style.content}>
            <div className={style.item}>
                New Post
                <PostForm onSubmit={addNewItem}/>
                {profilePage.postData.map((item, index) =>
                    <OldPost addLike={() => addLikeAC(item.id)}
                             key={index} message={item.message}
                             like={item.like}
                             comment={item.comment}/>)}
            </div>
        </div>
    )
}
