import {ProfileItemsPT} from "../components/Profile/Content/Posts/Posts";
import {actionPT} from "./store_redux";


export type addPostATPT = ReturnType<typeof addPostAC>
export type updateAddTextPostATPT = ReturnType<typeof updateAddTextPostAC>

export const ADD_POST = 'ADD-POST'
export const UPDATE_ADD_TEXT_POST = 'UPDATE-ADD-TEXT-POST'

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateAddTextPostAC = (newText: string) => ({type: UPDATE_ADD_TEXT_POST, newText: newText} as const)

const initialState: ProfileItemsPT =
    {
        postData: [
            {id: 1, message: 'Kiss me hard before you go Summertime sadness', like: 2, comment: 4},
            {id: 2, message: 'I just wanted you to know That baby you\'re the best', like: 7, comment: 8}
        ],
        newPostText: '',
    }


export const profile_reducer = (state: ProfileItemsPT = initialState, action: actionPT): ProfileItemsPT => {

    let newPost = {
        id: 2,
        message: state.newPostText, // action.newText
        like: 7,
        comment: 8
    }

    switch (action.type) {
        case ADD_POST:
            state.postData.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_ADD_TEXT_POST:
            state.newPostText = (action.newText)
            return state
        default:
            return state
    }
}