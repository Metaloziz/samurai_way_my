import axios from "axios";
import {ProfilePT} from "../components/Profile/Profile";
import {UsersStatePT} from "../components/Users/UsersContainer";
import {userDataPT} from "../components/Header/Header";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '0d359f4b-dbac-4b25-81ad-e06b681fec5c'}
})


export const headerAPI = () => {

    // debugger

    return instance
        .get('auth/me')
        .then((response): userDataPT => {

            // debugger
            return response.data
        })
}

export const profileAPI = (userID: string) => {
    return instance
        .get('profile/' + userID)
        .then((response): ProfilePT => response.data)
}

export const setUserDataAPI = (currentPage: number, pageSize: number) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response): UsersStatePT => {
            console.log(response)
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
            console.log(response)
            return response.data
        })
}