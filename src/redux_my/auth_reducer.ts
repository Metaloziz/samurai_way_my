import { Dispatch } from 'redux';

import { authMeAPI, loginAPI, loginAPIRequestType } from '../api/api';

import { actionPT } from './store_redux';

import { userDataPT } from 'components/Header';

export type setUserDataACPT = ReturnType<typeof setUserDataAC>;

export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserDataAC = (data: userDataPT) =>
  ({ type: SET_USER_DATA, data } as const);

const userDataInitialState: userDataPT = {
  data: {
    id: 21608,
    login: 'AndrewGaity',
    email: 'andrewgaity@yandex.by',
  },
  messages: [''],
  fieldsErrors: [''],
  resultCode: 1,
  isAuth: false,
};

export const authReducer = (
  state = userDataInitialState,
  action: actionPT,
): userDataPT => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};

const ZERO = 0;

export const setUserDataThunkCreator = () => (dispatch: Dispatch) => {
  authMeAPI().then(response => {
    if (response.resultCode === ZERO) {
      dispatch(setUserDataAC(response));
    } else {
      // eslint-disable-next-line no-console
      console.warn(` You are not authorised. ResultCode: ${response.resultCode}`);
    }
  });
};

export const setLoginThunkCreator =
  (userData: loginAPIRequestType) => (dispatch: Dispatch) => {
    loginAPI(userData).then((state: any) => {
      if (state.data.resultCode === ZERO) {
        authMeAPI().then(response => {
          if (response.resultCode === ZERO) {
            dispatch(setUserDataAC(response));
          } else {
            // eslint-disable-next-line no-console
            console.warn(` You are not authorised. ResultCode: ${response.resultCode}`);
          }
        });
      }
    });
  };
