import {actionPT} from "./store_redux";
import {userDataPT} from "../components/Header/Header";
import {Dispatch} from "redux";
import {authMeAPI} from "../api/api";

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
    resultCode: 1,
    isAuth: false
}

export const auth_reducer = (state = userDataInitialState, action: actionPT): userDataPT => {

    switch (action.type) {
        case SET_USER_DATA:
            console.log(action.data.data.login)
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setUserDataThunkCreator = () => (dispatch: Dispatch) => {

    authMeAPI()
        .then((response) => {

                if (response.resultCode === 0) {
                    dispatch(setUserDataAC(response))

                } else console.warn(' You are not authorised. ResultCode: ' + response.resultCode)
            }
        )
}