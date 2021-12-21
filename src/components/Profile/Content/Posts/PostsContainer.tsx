import React from "react";
import {addPostAC, updateAddTextPostAC} from "../../../../redux/profile_reducer";
import {Posts} from "./Posts";

import {ProfileItemsPT} from "../../../../redux/store";
import {StoreContext} from "../../../../StoreContext/StoreContext";


// type NewPostPT = {
//     profilePage: ProfileItemsPT
//     dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
// }

export const PostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {({getState, dispatch}) => {

                const state: ProfileItemsPT = getState().profilePage

                // AC - action creator
                const addNewPost = () => dispatch(addPostAC())
                const changePost = (newText: string) => dispatch(updateAddTextPostAC(newText))

                return <Posts profilePage={state} addNewPost={addNewPost} changePost={changePost}/>
            }}
       </StoreContext.Consumer>)


}