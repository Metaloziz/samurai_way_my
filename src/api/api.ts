import axios, { AxiosResponse } from 'axios';

import { userDataPT } from 'components/Header/Header';
import { UsersStatePT } from 'components/Users/UsersContainer';
import { ProfileDataType, ProfileType } from 'redux/profile_reducer';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: { 'API-KEY': process.env.REACT_APP_API_KEY as string },
});

export type loginAPIRequestType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captchaURL: string;
};

export type CommonResponseType<T = {}> = {
  data: T;
  fieldsErrors: [];
  messages: string[];
  resultCode: number;
};

type loginAPIResponseType = {
  userId: number;
};

type getCaptchaURLPT = {
  url: string;
};

export type ResponsePutPhoto = {
  photos: {
    small: string;
    large: string;
  };
};

export const authMeAPI = {
  me() {
    return instance.get<userDataPT>('auth/me').then(response => response.data);
  },
  login(data: loginAPIRequestType) {
    return instance
      .post<CommonResponseType<loginAPIResponseType>>('/auth/login', data)
      .then(response => response)
      .catch(res => res);
  },
  logout() {
    return instance.delete<null, AxiosResponse<CommonResponseType>>('/auth/login');
  },
  getCaptchaURL() {
    return instance.get<getCaptchaURLPT>('/security/get-captcha-url');
  },
};

export const profileAPI = {
  putPhoto(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return instance
      .put<CommonResponseType<ResponsePutPhoto>>('/profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => response.data);
  },
  getUserData(userID: string) {
    return instance.get<ProfileType>(`profile/${userID}`).then(response => response.data);
  },
  getUserStatus(userID: string) {
    return instance
      .get<string>(`/profile/status/${userID}`)
      .then(
        response => response.data, // только строка
      )
      .catch(rej => rej);
  },
  updateUserStatus(status: { status: string }) {
    return instance
      .put<CommonResponseType>('/profile/status', status) // 2 argument -  Media type: application/json
      .then(state => state.data);
  },
  updateUserData(data: ProfileDataType) {
    return instance
      .put<CommonResponseType>('/profile', { ...data })
      .then(response => response.data);
  },
};

export const followAPI = {
  setUnFollow: (userID: number) =>
    instance
      .delete<CommonResponseType>(`follow/${userID}`)
      .then(response => response.data),
  setFollow: (userID: number) =>
    instance.post<CommonResponseType>(`follow/${userID}`).then(response => response.data),
};

export const userAPI = {
  setUserOnPageAPI(pageID: number, pageSize: number) {
    return instance
      .get<UsersStatePT>(`users?page=${pageID}&count=${pageSize}`)
      .then(response => response.data);
  },
};
