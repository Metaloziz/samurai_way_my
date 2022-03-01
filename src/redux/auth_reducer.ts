import { Dispatch } from 'redux';

import { ActionPT, NewThunkType } from './store_redux';

import { authMeAPI, loginAPIRequestType } from 'api/api';
import { userDataPT } from 'components/Header/Header';
import { GET_CAPTCHA, SET_USER_DATA } from 'redux/constTypeAC/constTypies';
import { CommonConstants, ResultCode } from 'utils/enum/enum';

export type setUserDataACPT = ReturnType<typeof setUserDataAC>;
export type getCaptchaACPT = ReturnType<typeof getCaptchaAC>;

export const setUserDataAC = (data: userDataPT, isAuth: boolean) =>
  ({
    type: SET_USER_DATA,
    data,
    isAuth,
  } as const);

export const getCaptchaAC = (url: string) =>
  ({
    type: GET_CAPTCHA,
    url,
  } as const);

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

export const authReducer = (
  state = userDataInitialState,
  action: ActionPT,
): userDataPT => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: action.isAuth, captchaURL: '' };
    case GET_CAPTCHA:
      return { ...state, captchaURL: action.url };
    default:
      return state;
  }
};

export const setUserDataTC = () => async (dispatch: Dispatch) => {
  const response = await authMeAPI.me();
  if (response.resultCode === ResultCode.success) {
    dispatch(setUserDataAC(response, true));
  } else {
    // eslint-disable-next-line no-console
    console.warn(` You are not authorised. ResultCode: ${response.resultCode}`);
  }
};

export const getCaptchaURLTunkCreator = () => async (dispatch: Dispatch) => {
  const response = await authMeAPI.getCaptchaURL();
  dispatch(getCaptchaAC(response.data.url));
};

export const setLoginTC =
  (userData: loginAPIRequestType): NewThunkType =>
  async dispatch => {
    const response = await authMeAPI.login(userData);
    if (response.data.resultCode === ResultCode.success) {
      await dispatch(setUserDataTC()); // вызов другой санки
    } else {
      if (response.data.resultCode === ResultCode.captcha) {
        await dispatch(getCaptchaURLTunkCreator());
      }
      // const action = stopSubmit('LOGIN', {
      //   _error: response.data.messages[CommonConstants.zero]
      //     ? response.data.messages[CommonConstants.zero]
      //     : 'something is wrong',
      //
      // });
      // dispatch(action);
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
