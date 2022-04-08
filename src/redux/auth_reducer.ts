import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { NewThunkType } from './store_redux';

import { authMeAPI, loginAPIRequestType } from 'api/api';
import { userDataPT } from 'components/Header/Header';
import { CommonConstants, ResultCode } from 'utils/enum/enum';

const userDataInitialState: userDataPT = {
  data: {
    id: 1,
    login: '',
    email: '',
  },
  messages: [''],
  fieldsErrors: [''],
  resultCode: 1,
  isAuth: false, // it is not from API
  captchaURL: '',
};

const slice = createSlice({
  name: 'auth',
  initialState: userDataInitialState,
  reducers: {
    setUserDataAC(state, action: PayloadAction<{ data: userDataPT; isAuth: boolean }>) {
      const { data, isAuth } = action.payload;
      return { ...data, isAuth };
    },
    getCaptchaAC(state, action: PayloadAction<{ url: string }>) {
      state.captchaURL = action.payload.url;
    },
  },
});

export const authReducer = slice.reducer;
export const { setUserDataAC, getCaptchaAC } = slice.actions;

export const setUserDataTC = () => async (dispatch: Dispatch) => {
  const response = await authMeAPI.me();
  if (response.resultCode === ResultCode.success) {
    dispatch(setUserDataAC({ data: response, isAuth: true }));
  } else {
    dispatch(setUserDataAC({ data: response, isAuth: false }));
    // eslint-disable-next-line no-console
    console.warn(` You are not authorised. ResultCode: ${response.resultCode}`);
  }
};

export const getURLCaptchaTC = () => async (dispatch: Dispatch) => {
  const response = await authMeAPI.getCaptchaURL();
  dispatch(getCaptchaAC({ url: response.data.url }));
};

export const setLoginTC =
  (userData: loginAPIRequestType): NewThunkType =>
  async dispatch => {
    const response = await authMeAPI.login(userData);
    if (response.data.resultCode === ResultCode.success) {
      await dispatch(setUserDataTC()); // вызов другой санки
    } else {
      if (response.data.resultCode === ResultCode.captcha) {
        await dispatch(getURLCaptchaTC()); // вызов другой санки
      }
      // eslint-disable-next-line no-console
      console.warn(response.data.messages[CommonConstants.zero]);
    }
  };

export const setLogoutTC = (): NewThunkType => async dispatch => {
  const response = await authMeAPI.logout();
  if (response.data.resultCode === ResultCode.success) {
    await dispatch(setUserDataTC());
  }
};

export type setUserDataACPT = ReturnType<typeof setUserDataAC>;
export type getCaptchaACPT = ReturnType<typeof getCaptchaAC>;
