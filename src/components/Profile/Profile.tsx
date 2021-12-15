import React from "react";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {addPostATPT, ProfileItemsPT, updateAddTextPostATPT} from "../../redux/store";
import {PostsContainer} from "./Content/Posts/PostsContainer";

type ProfilePT = {
    profilePage: ProfileItemsPT
    dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
}


export const Profile = ({profilePage, dispatch}: ProfilePT) => {
    return (
        <div>
            <ContentHeader/>
            <PostsContainer profilePage={profilePage} dispatch={dispatch}/>
        </div>
    )
}