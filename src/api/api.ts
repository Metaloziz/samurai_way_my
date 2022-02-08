import axios from 'axios';

import { UsersStatePT } from '../components/Users/UsersContainer';

import { userDataPT } from 'components/Header';
import { ProfileType } from 'redux_my';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '0d359f4b-dbac-4b25-81ad-e06b681fec5c' },
});

export type loginAPIRequestType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: boolean;
};

export const loginAPI = (data: loginAPIRequestType): Promise<any> =>
  instance.post('/auth/login', data).then(response => response);

export const authMeAPI = (): Promise<userDataPT> =>
  instance.get('auth/me').then(response => response.data);

export const profileAPI = {
  getUserData: (userID: string): Promise<ProfileType> =>
    instance.get(`profile/${userID}`).then(response => response.data),

  getUserStatus: (userID: string) =>
    instance.get(`/profile/status/${userID}`).then(
      (response): string => response.data, // только строка
    ),
  updateUserStatus: (status: string) =>
    instance
      .put('/profile/status', { status }) // 2 argument -  Media type: application/json
      .then(state => state.data),
};

export const setUserOnPageAPI = (
  pageID: number,
  pageSize: number,
): Promise<UsersStatePT> =>
  instance.get(`users?page=${pageID}&count=${pageSize}`).then(response => response.data);

const ONE = 1;

export const setUserDataAPI = (
  currentPage: number = ONE,
  pageSize: number = ONE,
): Promise<UsersStatePT> => setUserOnPageAPI(currentPage, pageSize);

export const followAPI = {
  // это просто объект с методами, пушка
  setUnFollow: (userID: number) =>
    instance.delete(`follow/${userID}`).then(response => response.data),
  setFollow: (userID: number) =>
    instance.post(`follow/${userID}`).then(response => response.data),
};
