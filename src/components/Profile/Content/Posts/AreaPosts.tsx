import React from "react";
import {NewPost} from "./New_post/NewPost";
import {OldPost} from "./Old_post/OldPost";
import s from './Area-posts.module.css';
import { ProfileItemsPT} from "../../../../redux/state";


type profilePagePT = {
    profilePage: ProfileItemsPT
}


export const AreaPosts = ({profilePage}: profilePagePT ) => {

    let postDataItem = profilePage.postData.map(x => <OldPost message={x.message} like={x.like} comment={x.comment}/>)

    return (
        <div className={s.content}>
            <NewPost profilePage={profilePage}/>
            {postDataItem}
        </div>
    )
}