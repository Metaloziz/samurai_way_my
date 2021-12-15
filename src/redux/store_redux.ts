import {combineReducers, createStore} from "redux";
import {profile_reducer} from "./profile_reducer";
import {dialogs_reducer} from "./dialogs_reducer";
import {sidebar_reducer} from "./sidebar_reducer";

const reducers = combineReducers( {
    sidebar: sidebar_reducer,
    profilePage:profile_reducer,
    dialogsPage:dialogs_reducer
})


export const store = createStore(reducers)