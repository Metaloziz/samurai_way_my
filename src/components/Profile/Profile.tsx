import React from "react";
import {AreaPosts} from "./Content/Posts/AreaPosts";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {addPostPT, ProfileItemsPT, updatePostPT} from "../../redux/state";

export const Profile = (props: ProfileItemsPT & addPostPT & updatePostPT) => {
    return (
        <div>
            <ContentHeader/>
            <AreaPosts postData={props.postData}
                       addPost={props.addPost}
                       newPostText={props.newPostText}
                       updatePost={props.updatePost}/>

        </div>
    )
}