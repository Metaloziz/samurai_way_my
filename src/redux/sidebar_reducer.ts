import {actionPT, ItemPT} from "./store";

const initialState = [
    {path: '/profile', title: 'Profile'},
    {path: '/messages', title: 'Messages'},
    {path: '/news', title: 'News'},
    {path: '/music', title: 'Music'},
    {path: '/settings', title: 'Settings'},
]


export const sidebar_reducer = (state : Array<ItemPT>=initialState , action: actionPT) => state
