import React from "react";
import {AreaPosts} from "./Content/Posts/AreaPosts";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import { ProfileItemsPT} from "../../redux/_state";

type ProfilePT = {
    profilePage: ProfileItemsPT
    addPost: () => void
    updateAddPost: (message: string) => void
}


export const Profile = ({profilePage,updateAddPost,addPost}: ProfilePT ) => {
    return (
        <div>
            <ContentHeader/>
            <AreaPosts profilePage={profilePage} addPost={addPost} updateAddPost={updateAddPost} />

        </div>
    )
}