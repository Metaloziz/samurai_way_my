import React from "react";
import {NewPost} from "./New_post/NewPost";
import {OldPost} from "./Old_post/OldPost";
import s from './Area-posts.module.css';
import {ProfileItemsPT} from "../../../../redux/_state";


type AreaPostPT = {
    profilePage: ProfileItemsPT
    addPost: () => void
    updateAddPost: (message: string) => void
}


export const AreaPosts = ({profilePage, addPost, updateAddPost}: AreaPostPT) => {

    let postDataItem = profilePage.postData.map(x => <OldPost message={x.message} like={x.like} comment={x.comment}/>)

    return (
        <div className={s.content}>
            <NewPost profilePage={profilePage} addPost={addPost} updateAddPost={updateAddPost}/>
            {postDataItem}
        </div>
    )
}