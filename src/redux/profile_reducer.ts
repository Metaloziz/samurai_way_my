import {v1} from "uuid";
import {ProfileItemsPT} from "../components/Profile/Content/Posts/Posts";
import {actionPT} from "./store_redux";
import {ProfilePT} from "../components/Profile/Profile";


export type addPostATPT = ReturnType<typeof addPostAC>
export type changePostACPT = ReturnType<typeof changePostAC>
export type addLikeACPT = ReturnType<typeof addLikeAC>
export type setUserProfileACPT = ReturnType<typeof setUserProfileAC>

export const ADD_POST = 'ADD-POST'
export const CHANGE_POST = 'CHANGE_POST'
export const ADD_LIKE = 'ADD_LIKE'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const addPostAC = () => ({type: ADD_POST} as const)
export const changePostAC = (newText: string) => ({type: CHANGE_POST, newText: newText} as const)
export const addLikeAC = (postID: string) => ({type: ADD_LIKE, postID} as const)
export const setUserProfileAC = (profile: ProfilePT) => ({type: SET_USER_PROFILE, profile} as const)

const initialState: ProfileItemsPT =
    {
        postData: [
            {id: v1(), message: 'Kiss me hard before you go Summertime sadness', like: 2, comment: 4},
            {id: v1(), message: 'I just wanted you to know That baby you\'re the best', like: 7, comment: 8}
        ],
        newPostText: '',
        profile: {
            aboutMe: '',
            contacts: {},
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: 'test',
            userId: 0,
            photos: {
                small: '',
                large: ''
            }
        }
    }

export const profile_reducer = (state: ProfileItemsPT = initialState, action: actionPT): ProfileItemsPT => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText, // action.newText
                like: 0,
                comment: 0
            }
            return {...state, postData: [newPost, ...state.postData], newPostText: ''}
        case CHANGE_POST:
            return {...state, newPostText: action.newText}
        case ADD_LIKE:
            return {
                ...state, postData: state.postData
                    .map(post => post.id === action.postID ? {...post, like: post.like + 1} : post)
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}