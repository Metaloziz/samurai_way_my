import React from "react";
import {NewPost} from "./New_post/NewPost";
import {OldPost} from "./Old_post/OldPost";
import s from './Area-posts.module.css';
import {addPostPT, ProfileItemsPT, updatePostPT} from "../../../../redux/state";

export const AreaPosts = (props: ProfileItemsPT & addPostPT & updatePostPT) => {


    let postDataItem = props.postData.map(x => <OldPost message={x.message} like={x.like} comment={x.comment}/>)

    return (
        <div className={s.content}>
            <NewPost addPost={props.addPost}
                     newPostText={props.newPostText}
                     postData={props.postData}
                     updatePost={props.updatePost}/>
            {postDataItem}
        </div>
    )
}