import {actionPT} from "./store_redux";
import {UserPT, UsersStatePT} from "../components/Users/UsersContainer";
import {Dispatch} from "redux";
import {setFollowAPI, setUnFollowAPI, setUserDataAPI, setUserOnPageAPI} from "../api/api";

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

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const setUsersAC = (users: UserPT[], totalCount: number) => ({type: SET_USERS, users, totalCount} as const)
export const changePageAC = (pageID: number) => ({type: CHANGE_PAGE, pageID} as const)
export const toggleIsFetchingPageAC = (isFetchingPage: boolean) => ({
    type: TOGGLE_IS_FETCHING_PAGE,
    isFetchingPage
} as const)
export const toggleIsFetchingUserAC = (isFetchingUser: boolean, userID: number) => ({
    type: TOGGLE_IS_FETCHING_USER,
    isFetchingUser,
    userID
} as const)


let usersState: UsersStatePT = {
    items: [
        {
            id: 0,
            name: 'null',
            status: 'null',
            photos: {small: 'null', large: 'null',},
            followed: false,
            isFetchingUser: false  // add myself
        }],
    pageSize: 3,
    totalCount: 36,
    error: 'Error',
    currentPage: 1,
    isFetchingPage: true,         // add myself
}

export const users_reducer = (state: UsersStatePT = usersState, action: actionPT): UsersStatePT => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, items: state.items
                    .map(user => user.id === action.userID ? {...user, followed: !user.followed} : user)
            }
        case SET_USERS:

            return {...state, items: action.users, totalCount: action.totalCount}
        case CHANGE_PAGE:
            return {...state, currentPage: action.pageID}
        case TOGGLE_IS_FETCHING_PAGE:
            return {...state, isFetchingPage: action.isFetchingPage}
        case TOGGLE_IS_FETCHING_USER:
            return {
                ...state, items: state.items
                    .map(user => user.id === action.userID ? {...user, isFetchingUser: action.isFetchingUser} : user)
            }

        default:
            return state
    }
}


export const getUsersThunkContainer = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetchingPageAC(true))
        setUserDataAPI(currentPage, pageSize)
            .then((state) => {
                debugger
                console.log('setUserDataAPI')
                dispatch(setUsersAC(state.items, state.totalCount))
            })
        dispatch(toggleIsFetchingPageAC(false))
    }
}

export const sePageThunkContainer = (pageID: number, pageSize: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetchingPageAC(true))

        dispatch(changePageAC(pageID))
        setUserOnPageAPI(pageID, pageSize)
            .then((state) => {
                    dispatch(setUsersAC(state.items, state.totalCount))
                    dispatch(toggleIsFetchingPageAC(false))
                    console.log('setUserOnPageAPI')
                }
            )
    }
}

export const unFollowThunkContainer = (userID: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetchingUserAC(true, userID))
        setUnFollowAPI(userID)
            .then(response => {
                    if (response.resultCode === 0) {
                        dispatch(followAC(userID))
                        dispatch(toggleIsFetchingUserAC(false, userID))
                        console.log('unFollow')
                    }
                }
            )
    }
}

export const followThunkContainer = (userID: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleIsFetchingUserAC(true, userID))
        setFollowAPI(userID)
            .then(response => {
                    if (response.resultCode === 0) {
                        dispatch(followAC(userID))
                        dispatch(toggleIsFetchingUserAC(false, userID))
                        console.log('Follow')
                    }
                }
            )
    }
}
