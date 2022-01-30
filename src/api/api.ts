import axios from "axios";
import {UsersStatePT} from "../components/Users/UsersContainer";
import {userDataPT} from "../components/Header/Header";
import {ProfileType} from "../redux/profile_reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '0d359f4b-dbac-4b25-81ad-e06b681fec5c'}
})


export const authMeAPI = () => {

    return instance
        .get('auth/me')
        .then((response): userDataPT => {
            return response.data
        })
}

export const profileAPI = (userID: string) => {
    return instance
        .get('profile/' + userID)
        .then((response): ProfileType => response.data)
}

export const setUserDataAPI = (currentPage: number = 1, pageSize: number = 1) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response): UsersStatePT => {
            return response.data
        })
}

export const setUserOnPageAPI = (pageID: number, pageSize: number) => {
    return instance
        .get(`users?page=${pageID}&count=${pageSize}`)
        .then((response): UsersStatePT => response.data)
}

export const setUnFollowAPI = (userID: number) => {
    return instance
        .delete('follow/' + userID)
        .then((response) => response.data)
}

export const setFollowAPI = (userID: number) => {
    return instance
        .post('follow/' + userID)
        .then(response => {
            return response.data
        })
}