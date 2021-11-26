import React from "react";
import s from "./Old_Post.module.css";

type propsType = {
    message: string
    like: number
    comment: number
}

export const OldPost = (props: propsType) => {
    return (
        <div className={s.content}>
            <img alt={'@'} className={s.avatar}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1UqsPpKa_ipIT3XjQpWpH5mm6ZiBlEpvzw&usqp=CAU"/>
            <span className={s.item}>{props.message}</span>
            <div>
            <button>Like</button> <span>{props.like} </span>
            <button>Comment</button> <span> {props.comment}</span>
            </div>
        </div>
    )
}