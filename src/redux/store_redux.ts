import {
    addLikeACPT,
    addPostATPT,
    profile_reducer,
    changePostACPT,
    setUserProfileACPT,
    setUserStatusACPT
} from "./profile_reducer";
import {
    addTextMessageATPT,
    dialogs_reducer,
    updateTextMessageATPT
} from "./dialogs_reducer";
import {sidebar_reducer, sidebarATPT} from "./sidebar_reducer";
import {
    changePageACPT,
    followATPT,
    setUsersATPT,
    toggleIsFetchingPageACPT,
    toggleIsFetchingUserACPT,
    users_reducer
} from "./users_reducer";
import {auth_reducer, setUserDataACPT} from "./auth_reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

export type AppStatePT = ReturnType<typeof reducer>

const reducer = combineReducers({
    sidebarPage: sidebar_reducer,
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    users: users_reducer,
    auth: auth_reducer,
    form: formReducer   // redux-form
})

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))


export type actionPT =
    addPostATPT
    | changePostACPT
    | addTextMessageATPT
    | updateTextMessageATPT
    | sidebarATPT
    | followATPT
    | setUsersATPT
    | changePageACPT
    | toggleIsFetchingPageACPT
    | toggleIsFetchingUserACPT
    | addLikeACPT
    | setUserProfileACPT
    | setUserDataACPT
    | setUserStatusACPT
