import React from "react";
import s from './Posts.module.css'
import {ProfileItemsPT,} from "../../../../redux/store";
import {OldPost} from "./Old_post/OldPost";

type NewPostPT = {
    profilePage: ProfileItemsPT
    addNewPost: () => void
    changePost: (newText: string) => void
}

export const Posts = (props: NewPostPT) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (newPostElement.current?.value) {                // check empty
            props.addNewPost()
        }
    }

    const changePost = () => {
        if (newPostElement.current) {                        // check empty
            props.changePost(newPostElement.current.value)
        }
    }

    const postDataItem = props.profilePage.postData.map(x => <OldPost message={x.message}
                                                                      like={x.like}
                                                                      comment={x.comment}/>)

    return (
        <div className={s.content}>
            <div className={s.item}>
                New Post
                <div>
                <textarea onChange={changePost}
                          ref={newPostElement}
                          value={props.profilePage.newPostText}
                          placeholder={'You Can type some'}/>
                    <div>
                        <button onClick={addNewPost}>Add post</button>
                    </div>
                </div>
                {postDataItem}
            </div>
        </div>
    )
}
