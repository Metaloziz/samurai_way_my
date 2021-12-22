import {actionPT} from "./store_redux";
import {usersStatePT} from "../components/Users/Users";


export type followATPT = ReturnType<typeof followAC>
// export type unfollowATPT = ReturnType<typeof onFollowAC>  //typing is object-based

export const FOLLOW = 'FOLLOW'
// export const UNFOLLOW = 'UNFOLLOW'

export const followAC = (userId: number) => ({type: FOLLOW, userId: userId} as const)
// export const onFollowAC = (userId: number) => ({type: UNFOLLOW, userId: userId} as const)


const initialUsersState: usersStatePT = {
    users: [
        {id: 1, followed: false, fullName: 'Andrew', status: 'I am a Hero', location: {city: 'Minsk', country: 'BY'}},
        {id: 2, followed: true, fullName: 'Nero', status: 'I am a Bad', location: {city: 'Kiev', country: 'UK'}},
        {id: 3, followed: true, fullName: 'Dante', status: 'I am a Demon', location: {city: 'Paris', country: 'FR'}}
    ]
}

export const users_reducer = (state: usersStatePT = initialUsersState, action: actionPT): usersStatePT => {
    // debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user)
        //     }
        default:
            return state
    }
}