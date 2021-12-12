import React from "react";
import {AreaPosts} from "./Content/Posts/AreaPosts";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {addPostATPT, updateAddTextPostATPT, ProfileItemsPT} from "../../redux/_state";

type ProfilePT = {
    profilePage: ProfileItemsPT
    dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
}


export const Profile = ({profilePage,dispatch}: ProfilePT ) => {
    return (
        <div>
            <ContentHeader/>
            <AreaPosts profilePage={profilePage} dispatch={dispatch} />

        </div>
    )
}