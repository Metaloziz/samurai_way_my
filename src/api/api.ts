import axios, { AxiosResponse } from 'axios';
import { UsersStatePT } from 'components/Users/UsersContainer';
import { userDataPT } from 'components/Header/Header';
import { ProfileDataType, ProfileType } from 'redux/profile_reducer';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: { 'API-KEY': process.env.REACT_APP_API_KEY as string },
});

export type loginAPIRequestType = {
  email: string
  password: string
  rememberMe: boolean
  captchaURL: string
}

export type CommonResponseType<T = {}> = {
  data: T
  fieldsErrors: []
  messages: string[]
  resultCode: number
}

type loginAPIResponseType = {
  userId: number
}

type getCaptchaURLPT = {
  url: string
}

export type ResponsePutPhoto = {
  photos: {
    small: string
    large: string
  }
}

export const authMeAPI = {

  me() {
    return instance
      .get<userDataPT>('auth/me')
      .then((response) => {
        return response.data;
      });
  },
  login(data: loginAPIRequestType) {
    return instance
      .post<CommonResponseType<loginAPIResponseType>>('/auth/login', data)
      .then((response) => {
        return response;
      }).catch((res) => res);
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
    let formData = new FormData();
    formData.append('image', image);
    return instance
      .put<CommonResponseType<ResponsePutPhoto>>('/profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  getUserData(userID: string) {
    return instance
      .get<ProfileType>('profile/' + userID)
      .then((response) => {
        return response.data;
      });
  },
  getUserStatus(userID: string) {
    return instance
      .get<string>('/profile/status/' + userID)
      .then((response) => {
          return response.data;   // только строка
        },
      ).catch(rej => rej);
  },
  updateUserStatus(status: { status: string }) {
    return instance
      .put<CommonResponseType>('/profile/status', status) // 2 argument -  Media type: application/json
      .then((state) => {
        return state.data;
      });
  },
  updateUserData(data: ProfileDataType) {
    return instance
      .put<CommonResponseType>('/profile', { ...data })
      .then((response) => {
        return response.data;
      });
  },
};

export const UserAPI = {
  setUserOnPageAPI(pageID: number, pageSize: number) {
    return instance
      .get<UsersStatePT>(`users?page=${pageID}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const followAPI = {

  setUnFollow: (userID: number) => {
    return instance
      .delete<CommonResponseType>('follow/' + userID)
      .then((response) => {
        return response.data;
      });
  },
  setFollow: (userID: number) => {
    return instance
      .post<CommonResponseType>('follow/' + userID)
      .then((response) => {
        return response.data;
      });
  },
};
