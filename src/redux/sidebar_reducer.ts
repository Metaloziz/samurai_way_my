import {actionPT} from "./store_redux";
import {ItemPT} from "../components/Navigation/Navigation";


export type sidebarATPT = ReturnType<typeof sidebarAC>

const initialState: Array<ItemPT> = [
    {path: '/profile', title: 'Profile'},
    {path: '/messages', title: 'Messages'},
    {path: '/users', title: 'Users'},
    {path: '/news', title: 'News'},
    {path: '/music', title: 'Music'},
    {path: '/settings', title: 'Settings'}
]


export const sidebarAC = () => ({type: 'SIDE_BAR_TEST'} as const)

export const sidebar_reducer = (state: Array<ItemPT> = initialState, action: actionPT): Array<ItemPT> => {
    console.log(typeof action.type + 'text from sidebar')
    return state
}
