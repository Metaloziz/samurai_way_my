import React from "react";
import {ContentHeader} from "./Content/Content_header/ContentHeader";
import {PostsContainer} from "./Content/Posts/PostsContainer";

export type ProfileOnePT = {
    profile: ProfilePT
}


export type ProfilePT = {
    aboutMe: string
    contacts: { [key: string]: string }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export const Profile = (props: ProfileOnePT) => {

    return (
        <div>
            <ContentHeader profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}