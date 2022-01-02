import {actionPT} from "./store_redux";
import {usersPT, usersStatePT} from "../components/Users/Users";
import * as axios from "axios";


export type followATPT = ReturnType<typeof followAC>
export type setUsersATPT = ReturnType<typeof seUsersAC>
// export type unfollowATPT = ReturnType<typeof onFollowAC>  //typing is object-based

export const FOLLOW = 'FOLLOW'
export const SET_USERS = 'SET_USERS'
// export const UNFOLLOW = 'UNFOLLOW'

export const followAC = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const seUsersAC = (users: usersPT) => ({type: SET_USERS, usersFromAPI: users} as const)
// export const onFollowAC = (userId: number) => ({type: UNFOLLOW, userId: userId} as const)


const initialUsersState: usersStatePT = {
    users: [
        {
            id: 1,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a Hero',
            location: {city: 'Minsk', country: 'BY'}
        },
        {
            id: 2,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
            followed: true,
            fullName: 'Nero',
            status: 'I am a Bad',
            location: {city: 'Kiev', country: 'UK'}
        },
        {
            id: 3,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
            followed: true,
            fullName: 'Dante',
            status: 'I am a Demon',
            location: {city: 'Paris', country: 'FR'}
        }
    ]
}
let item = axios.default.get('https://social-network.samuraijs.com/api/1.0/users').then((state) => {
    return state.data.items.users
})

type itemPT = typeof item
//
// let newInitState = axios.default
//     .get('https://social-network.samuraijs.com/api/1.0/users')
//     .then((state) => {
//
//         let items: itemPT = state.data.items
//
//         let newState = items.map(i => ({
//             id: 1,
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
//             followed: false,
//             fullName: 'Andrew',
//             status: 'I am a Hero',
//             location: {city: 'Minsk', country: 'BY'}
//         }))
//         return state.data.items
//     })
//

export const users_reducer = (state: usersStatePT = initialUsersState, action: actionPT): usersStatePT => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.usersFromAPI]
            }
        default:
            return state
    }
}