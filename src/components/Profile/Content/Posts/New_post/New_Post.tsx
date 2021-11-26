import s from './New_Post.module.css'
import React from "react";

export const New_Post = () => {
    return (
        <div className={s.item}>
            New Post

            <div>
                <input placeholder={'text'} />
            </div>
        </div>
    )
}