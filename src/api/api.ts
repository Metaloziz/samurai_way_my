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
    console.log('authMeAPI')
    return instance
        .get('auth/me')
        .then((response): userDataPT => {
            return response.data
        })
}

export const profileAPI = (userID: string) => {
    console.log('profileAPI')
    return instance
        .get('profile/' + userID)
        .then((response): ProfileType => {
            return response.data
        })
}

export const profileStatusAPI = (userID: string) => {
    console.log('profileStatusAPI')
    return instance
        .get('/profile/status/' + userID)
        .then((response): string => {
            return response.data
        })

}

// profileStatusAPI("2").then()


export const setUserDataAPI = (currentPage: number = 1, pageSize: number = 1) => {
    console.warn('It is old method')
    return setUserOnPageAPI(currentPage, pageSize)

    // instance
    //     .get(`users?page=${currentPage}&count=${pageSize}`)
    //     .then((response): UsersStatePT => {
    //         return response.data
    //     })
}

export const setUserOnPageAPI = (pageID: number, pageSize: number) => {
    console.log('setUserOnPageAPI')
    return instance
        .get(`users?page=${pageID}&count=${pageSize}`)
        .then((response): UsersStatePT => {
            return response.data
        })
}

export const setUnFollowAPI = (userID: number) => {
    console.log('setUnFollowAPI')
    return instance
        .delete('follow/' + userID)
        .then((response) => {
            return response.data
        })
}

export const setFollowAPI = (userID: number) => {
    console.log('setFollowAPI')
    return instance
        .post('follow/' + userID)
        .then(response => {
            return response.data
        })
}