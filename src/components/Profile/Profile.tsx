import React from "react";
import {AreaPosts} from "./Content/Posts/AreaPosts";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {addPostFromStatePT, ProfileItemsPT, updateNewPostTextPT} from "../../redux/state";

export const Profile = (props: ProfileItemsPT & addPostFromStatePT & updateNewPostTextPT) => {
    return (
        <div>
            <ContentHeader/>
            <AreaPosts postData={props.postData}
                       addPost={props.addPost}
                       newPostText={props.newPostText}
                       updateText={props.updateText}/>

        </div>
    )
}