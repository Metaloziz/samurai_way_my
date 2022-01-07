import {combineReducers, createStore} from "redux";
import {addLikeACPT, addPostATPT, profile_reducer, changePostACPT, setUserProfileACPT} from "./profile_reducer";
import {addTextMessageATPT, dialogs_reducer, updateTextMessageATPT} from "./dialogs_reducer";
import {sidebar_reducer, sidebarATPT} from "./sidebar_reducer";
import {changePageACPT, followATPT, setUsersATPT, toggleIsFetchingACPT, users_reducer} from "./users_reducer";

export type actionPT =
    addPostATPT
    | changePostACPT
    | addTextMessageATPT
    | updateTextMessageATPT
    | sidebarATPT
    | followATPT
    | setUsersATPT
    | changePageACPT
    | toggleIsFetchingACPT
    | addLikeACPT
    | setUserProfileACPT


export type AppStatePT = ReturnType<typeof reducers>

const reducers = combineReducers({
    sidebar: sidebar_reducer,
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    users: users_reducer
})

export const store = createStore(reducers)
