import {actionPT} from "./store_redux";
import {UserPT, UsersPT} from "../components/Users/UsersContainer";

export type followATPT = ReturnType<typeof followAC>
export type setUsersATPT = ReturnType<typeof setUsersAC>
export type changePageACPT = ReturnType<typeof changePageAC>
export type toggleIsFetchingPageACPT = ReturnType<typeof toggleIsFetchingPageAC>
export type toggleIsFetchingUserACPT = ReturnType<typeof toggleIsFetchingUserAC>

export const FOLLOW = 'FOLLOW'
export const SET_USERS = 'SET_USERS'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const TOGGLE_IS_FETCHING_PAGE = 'TOGGLE_IS_FETCHING_PAGE'
export const TOGGLE_IS_FETCHING_USER = 'TOGGLE_IS_FETCHING_USER'


export const followAC = (userId: number) => ({type: FOLLOW, userId: userId} as const)
export const setUsersAC = (users: UserPT[], totalCount: number) => ({type: SET_USERS, users, totalCount} as const)
export const changePageAC = (pageID: number) => ({type: CHANGE_PAGE, pageID} as const)
export const toggleIsFetchingPageAC = (isFetchingPage: boolean) => ({
    type: TOGGLE_IS_FETCHING_PAGE,
    isFetchingPage
} as const)
export const toggleIsFetchingUserAC = (isFetchingUser: boolean) => ({
    type: TOGGLE_IS_FETCHING_USER,
    isFetchingUser
} as const)


let newInitialState: UsersPT = {
    items: [{id: 0, name: 'null', status: 'null', photos: {small: 'null', large: 'null',}, followed: false}],
    pageSize: 3,
    totalCount: 36,
    error: 'Error',
    currentPage: 1,
    isFetchingPage: true,
    isFetchingUser: false
}

export const users_reducer = (state: UsersPT = newInitialState, action: actionPT): UsersPT => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, items: state.items
                    .map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }
        case SET_USERS:
            return {...state, items: action.users, totalCount: action.totalCount}
        case CHANGE_PAGE:
            return {...state, currentPage: action.pageID}
        case TOGGLE_IS_FETCHING_PAGE:
            return {...state, isFetchingPage: action.isFetchingPage}
        case TOGGLE_IS_FETCHING_USER:
            return {...state, isFetchingUser: action.isFetchingUser}

        default:
            return state
    }
}


// const initialUsersState: usersStatePT = {
//     users: [
//         {
//             id: 1,
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
//             followed: false,
//             fullName: 'Andrew',
//             status: 'I am a Hero',
//             location: {city: 'Minsk', country: 'BY'}
//         },
//         {
//             id: 2,
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
//             followed: true,
//             fullName: 'Nero',
//             status: 'I am a Bad',
//             location: {city: 'Kiev', country: 'UK'}
//         },
//         {
//             id: 3,
//             photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFYVbjlgLDY0iVoBVcAqWrMZmCs2iflo3rbglT_h6S1lklhJIAuwaSEXAbvnwbFjcibM&usqp=CAU',
//             followed: true,
//             fullName: 'Dante',
//             status: 'I am a Demon',
//             location: {city: 'Paris', country: 'FR'}
//         }
//     ]
// }

