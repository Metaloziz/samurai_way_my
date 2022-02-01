import axios from "axios";
import {UsersStatePT} from "../components/Users/UsersContainer";
import {userDataPT} from "../components/Header/Header";
import {ProfileType} from "../redux/profile_reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '0d359f4b-dbac-4b25-81ad-e06b681fec5c'}
})


export type loginAPIRequestType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export const loginAPI = (data: loginAPIRequestType) => {
    return instance
        .post('/auth/login', data)
        .then((response) => {
            return response
        })

}


export const authMeAPI = () => {
    return instance
        .get('auth/me')
        .then((response): userDataPT => {
            console.log(response.data)
            return response.data
        })
}

export const profileAPI = {
    getUserData: (userID: string) => {
        return instance
            .get('profile/' + userID)
            .then((response): ProfileType => {
                return response.data
            })
    },

    getUserStatus: (userID: string) => {
        return instance
            .get('/profile/status/' + userID)
            .then((response): string => {
                    return response.data   // только строка
                }
            )
    },
    updateUserStatus: (status: string) => {

        return instance
            .put('/profile/status', {status: status}) // 2 argument -  Media type: application/json
            .then((state) => {
                return state.data
            })
    }
}

// profileStatusAPI("2").then()

export const setUserDataAPI = (currentPage: number = 1, pageSize: number = 1) => {
    console.log('It is old method')
    return setUserOnPageAPI(currentPage, pageSize)

    // instance
    //     .get(`users?page=${currentPage}&count=${pageSize}`)
    //     .then((response): UsersStatePT => {
    //         return response.data
    //     })

}

export const setUserOnPageAPI = (pageID: number, pageSize: number) => {
    return instance
        .get(`users?page=${pageID}&count=${pageSize}`)
        .then((response): UsersStatePT => {
            return response.data
        })
}

export const followAPI = {   // это просто объект с методами, пушка

    setUnFollow: (userID: number) => {
        return instance
            .delete('follow/' + userID)
            .then((response) => {
                return response.data
            })
    },
    setFollow: (userID: number) => {
        return instance
            .post('follow/' + userID)
            .then(response => {
                return response.data
            })
    },
}
