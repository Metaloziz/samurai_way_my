import React from "react";
import {addPostATPT, ProfileItemsPT, updateAddTextPostATPT,} from "../../../../redux/store";
import {addPostAC, updateAddTextPostAC} from "../../../../redux/profile_reducer";
import {Posts} from "./Posts";


type NewPostPT = {
    profilePage: ProfileItemsPT
    dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
}

export const PostsContainer = ({profilePage, dispatch}: NewPostPT) => {

    const addNewPost = () => {
        dispatch(addPostAC())                        // AC - action creator
    }

    const changePost = (newText: string) => {
        dispatch(updateAddTextPostAC(newText))       // AC - action creator
    }

    return (<Posts profilePage={profilePage} addNewPost={addNewPost} changePost={changePost}/>)
}