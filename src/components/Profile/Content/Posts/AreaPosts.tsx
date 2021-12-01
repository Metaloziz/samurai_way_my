import React from "react";
import {NewPost} from "./New_post/NewPost";
import {OldPost} from "./Old_post/OldPost";
import s from './Area-posts.module.css';
import {ProfileMiddle} from "../../../../redux/state";

export const AreaPosts = (props: ProfileMiddle) => {

    // let postData = [
    //     {id: 1, message: 'Kiss me hard before you go Summertime sadness', like: 2, comment: 4},
    //     {id: 2, message: 'I just wanted you to know That baby you\'re the best', like: 7, comment: 8}
    // ]

    let postDataItem = props.postData.map(x => <OldPost message={x.message} like={x.like} comment={x.comment}/>)

    return (
        <div className={s.content}>
            <NewPost addPost={props.addPost}/>
            {postDataItem}
        </div>
    )
}