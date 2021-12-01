import React from "react";
import {AreaPosts} from "./Content/Posts/AreaPosts";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {ProfileMiddle} from "../../redux/state";

export const Profile = (props : ProfileMiddle) => {
    return (
        <div>
            <ContentHeader/>
            <AreaPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}