import React from "react";
import {addPostAC, updateAddTextPostAC} from "../../../../redux/profile_reducer";
import {Posts} from "./Posts";
import {StoreContext} from "../../../../StoreContext";


// type NewPostPT = {
//     profilePage: ProfileItemsPT
//     dispatch: (action: addPostATPT | updateAddTextPostATPT) => void
// }

export const PostsContainer = () => {


    return (<StoreContext.Consumer>
        {(store) => {

            const state = store.getState().profilePage

            // AC - action creator
            const addNewPost = () => store.dispatch(addPostAC())
            const changePost = (newText: string) => store.dispatch(updateAddTextPostAC(newText))

            return <Posts profilePage={state} addNewPost={addNewPost} changePost={changePost}/>
        }}
    </StoreContext.Consumer>)


}