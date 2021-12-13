import {actionPT, ProfileItemsPT} from "./_state";

export const ADD_POST = 'ADD-POST'
export const UPDATE_ADD_TEXT_POST = 'UPDATE-ADD-TEXT-POST'

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateAddTextPostAC = (newText: string) => ({type: UPDATE_ADD_TEXT_POST, newText: newText} as const)


export const profile_reducer = (state: ProfileItemsPT, action: actionPT) => {

    let newPost = {
        id: 2,
        message: state.newPostText, // action.newText
        like: 7,
        comment: 8
    }

    switch (action.type) {
        case ADD_POST:
            console.log('state change')
            state.postData.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_ADD_TEXT_POST:
            console.log('state updateAddPost')
            state.newPostText = (action.newText)
            // this._callSubscriber()               // why is'not it here ?
            return state
        default:
            return state
    }
}