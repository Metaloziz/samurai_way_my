import React from "react";
import {New_Post} from "./New_post/New_Post";
import {Old_Post} from "./Old_post/Old_Post";

import s from './Area-posts.module.css';

export const Area_posts = () => {

    let postData = [
        {id: 1, message: 'Kiss me hard before you go Summertime sadness', like: 2, comment: 4},
        {id: 2, message: 'I just wanted you to know That baby you\'re the best', like: 7, comment: 8}
    ]

    let postDataItem = postData.map(x => <Old_Post message={x.message} like={x.like} comment={x.comment}/>)

    return (
        <div className={s.content}>
            <New_Post/>
            {postDataItem}
        </div>
    )
}