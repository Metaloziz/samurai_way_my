import React from "react";
import {NewPost} from "./New_post/NewPost";
import {OldPost} from "./Old_post/OldPost";
import s from './Area-posts.module.css';
import {addPostATPT, updateAddTextPostATPT, ProfileItemsPT} from "../../../../redux/store";


type AreaPostPT = {
    profilePage: ProfileItemsPT
    dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
}


export const AreaPosts = ({profilePage, dispatch}: AreaPostPT) => {

    let postDataItem = profilePage.postData.map(x => <OldPost message={x.message} like={x.like} comment={x.comment}/>)

    return (
        <div className={s.content}>
            <NewPost profilePage={profilePage} dispatch={dispatch}/>
            {postDataItem}
        </div>
    )
}