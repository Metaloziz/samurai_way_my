import axios, { AxiosResponse } from 'axios';
import { UsersStatePT } from 'components/Users/UsersContainer';
import { userDataPT } from 'components/Header/Header';
import { ProfileType } from 'redux/profile_reducer';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  // headers: { 'API-KEY': process.env.REACT_APP_API_KEY as string },
  headers: { 'API-KEY': '6d28cae1-0bac-4f22-abce-7f5967410738' },
});

export type loginAPIRequestType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: boolean
}

type CommonResponseType<T = {}> = {
  data: T
  fieldsErrors: []
  messages: []
  resultCode: number
}

type loginAPIResponseType = {
  userId: number
}

type payloadStatusType = { status: string };

export const authMeAPI = {

  me() {
    return instance
      .get<null, AxiosResponse<userDataPT>>('auth/me')
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  },

  login(data: loginAPIRequestType) {
    return instance
      .post<null, AxiosResponse<CommonResponseType<loginAPIResponseType>>, loginAPIRequestType>('/auth/login', data)
      .then((response) => {
        return response;
      }).catch((res) => res);
  },
  logout() {
    return instance.delete<null, AxiosResponse<CommonResponseType>>('/auth/login');
  },
};

export const profileAPI = {

  getUserData(userID: string) {
    return instance
      .get<null, AxiosResponse<ProfileType>>('profile/' + userID)
      .then((response) => {
        return response.data;
      });
  },
  getUserStatus(userID: string) {
    return instance
      .get<null, AxiosResponse<string>>('/profile/status/' + userID)
      .then((response) => {
          return response.data;   // только строка
        },
      );
  },
  updateUserStatus(status: string) {
    return instance
      .put<null, AxiosResponse<CommonResponseType>, payloadStatusType>('/profile/status', { status }) // 2 argument -  Media type: application/json
      .then((state) => {
        return state.data;
      });
  },
};
//
// export const setUserDataAPI = (currentPage: number = 1, pageSize: number = 1) => {
//   console.log('It is old method');
//   return setUserOnPageAPI(currentPage, pageSize);
//
// };

export const UserAPI = {
  setUserOnPageAPI(pageID: number, pageSize: number) {
    return instance
      .get(`users?page=${pageID}&count=${pageSize}`)
      .then((response): UsersStatePT => {
        return response.data;
      });
  },
};

// export const setUserOnPageAPI = (pageID: number, pageSize: number) => {
//   return instance
//     .get(`users?page=${pageID}&count=${pageSize}`)
//     .then((response): UsersStatePT => {
//       return response.data;
//     });
// };

export const followAPI = {   // это просто объект с методами, пушка

  setUnFollow: (userID: number) => {
    return instance
      .delete<null, AxiosResponse<CommonResponseType>>('follow/' + userID)
      .then((response) => {
        return response.data;
      });
  },
  setFollow: (userID: number) => {
    return instance
      .post<null, AxiosResponse<CommonResponseType>>('follow/' + userID)
      .then(response => {
        return response.data;
      });
  },
};
