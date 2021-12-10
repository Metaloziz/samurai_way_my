import React from "react";
import {AreaPosts} from "./Content/Posts/AreaPosts";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import { ProfileItemsPT} from "../../redux/_state";

type profilePagePT = {
    profilePage: ProfileItemsPT
}


export const Profile = (props: profilePagePT ) => {
    return (
        <div>
            <ContentHeader/>
            <AreaPosts profilePage={props.profilePage} />

        </div>
    )
}