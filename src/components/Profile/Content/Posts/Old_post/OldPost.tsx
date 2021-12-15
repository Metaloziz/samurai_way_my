import React from "react";
import s from "./Old_Post.module.css";

type OldPostPT = {
    message: string
    like: number
    comment: number
}

export const OldPost = ({message, like, comment}: OldPostPT) => {
    return (
        <div className={s.content}>
            <div className={s.items}>
                <img alt={'@'} className={s.avatar}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1UqsPpKa_ipIT3XjQpWpH5mm6ZiBlEpvzw&usqp=CAU"/>
                <span className={s.item}>{message}</span></div>
            <div className={s.contentButtons}>
                <button>Like</button>
                <span>{like} </span>
                <button>Comment</button>
                <span>{comment}</span>
            </div>
        </div>
    )
}