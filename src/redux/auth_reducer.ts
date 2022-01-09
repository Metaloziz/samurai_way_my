import {actionPT} from "./store_redux";
import {userDataPT} from "../components/Header/Header";


export type setUserDataACPT = ReturnType<typeof setUserDataAC>

export const SET_USER_DATA = 'SET_USER_DATA'

export const setUserDataAC = (data: userDataPT) => ({type: SET_USER_DATA, data} as const)

const userDataInitialState: userDataPT = {
    data: {
        id: 21608,
        login: "AndrewGaity",
        email: "andrewgaity@yandex.by"
    },
    messages: [''],
    fieldsErrors: [''],
    resultCode: 1
}

export const auth_reducer = (state = userDataInitialState, action: actionPT): userDataPT => {

    switch (action.type) {
        case SET_USER_DATA:
            console.log(action.data.data.login)
            return {...state, ...action.data}
        default:
            return state
    }
}