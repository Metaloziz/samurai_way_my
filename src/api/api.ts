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
  captcha: boolean
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

type payloadStatusType = { status: string };

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
      .post<null, AxiosResponse<CommonResponseType<loginAPIResponseType>>>('/auth/login', data)
      .then((response) => {
        return response;
      }).catch((res) => res);
  },
  logout() {
    return instance.delete<null, AxiosResponse<CommonResponseType>>('/auth/login');
  },
};

export type ResponsePutPhoto = {
  photos: {
    small: string
    large: string
  }
}

export const profileAPI = {
  putPhoto(image: File) {
    let formData = new FormData();
    formData.append('image', image);
    return instance
      .put<null, AxiosResponse<CommonResponseType<ResponsePutPhoto>>>('/profile/photo', formData, {
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
  updateUserData(data: ProfileDataType) {
    return instance
      .put<null, AxiosResponse<CommonResponseType>>('/profile', { ...data })
      .then((response) => {
        return response.data;
      });
  },
};

export const UserAPI = {
  setUserOnPageAPI(pageID: number, pageSize: number) {
    return instance
      .get<null, AxiosResponse<UsersStatePT>>(`users?page=${pageID}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const followAPI = {

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
