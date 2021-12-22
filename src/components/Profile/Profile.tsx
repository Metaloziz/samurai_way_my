import React from "react";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {PostsContainer} from "./Content/Posts/PostsContainer";

// type ProfilePT = {
//     profilePage: ProfileItemsPT
//     dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
// }


export const Profile = () => {
    return (
        <div>
            <ContentHeader/>
            <PostsContainer/>
        </div>
    )
}