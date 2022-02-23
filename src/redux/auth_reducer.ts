import { actionPT, ThunkType } from './store_redux';
import { userDataPT } from 'components/Header/Header';
import { Dispatch } from 'redux';
import { authMeAPI, loginAPIRequestType } from 'api/api';
import { stopSubmit } from 'redux-form';
import { ResultCode } from 'utils/enum/enum';
import { GET_CAPTCHA, SET_USER_DATA } from 'redux/constTypeAC/constTypies';

export type setUserDataACPT = ReturnType<typeof setUserDataAC>
export type getCaptchaACPT = ReturnType<typeof getCaptchaAC>

export const setUserDataAC = (data: userDataPT, isAuth: boolean) => ({
  type: SET_USER_DATA,
  data,
  isAuth,
} as const);

export const getCaptchaAC = (url: string) => ({
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
  isAuth: false,  // it is not from API
  captchaURL: '',
};

export const auth_reducer = (state = userDataInitialState, action: actionPT): userDataPT => {
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
  let response = await authMeAPI.me();
  if (response.resultCode === ResultCode.success) {
    dispatch(setUserDataAC(response, true));
  } else {
    console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
  }
};

export const setLoginTC = (userData: loginAPIRequestType): ThunkType => async (dispatch) => {
  let response = await authMeAPI.login(userData);
  if (response.data.resultCode === ResultCode.success) {
    await dispatch(setUserDataTC()); // вызов другой санки
  } else {

    if (response.data.resultCode === ResultCode.captcha) {
      await dispatch(getCaptchaURL_TC());
    }

    let action = stopSubmit('LOGIN', {
      _error: response.data.messages[0] ? response.data.messages[0] : 'something is wrong',
      // ['email']: 'email is wrong',
      // ['passwor' + 'd']: 'password is wrong',
    });
    dispatch(action);
    console.warn(response.data.messages[0]);
  }
};

export const setLogoutTC = (): ThunkType => async (dispatch) => {
  let response = await authMeAPI.logout();

  if (response.data.resultCode === ResultCode.success) {
    // await dispatch(setUserDataThunkCreator());
    let response = await authMeAPI.me();  // дублирование, заменить на вторую санку
    if (response.resultCode !== ResultCode.success) {
      dispatch(setUserDataAC(response, false));
    } else console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
  }
};

export const getCaptchaURL_TC = () => async (dispatch: Dispatch) => {

  let response = await authMeAPI.getCaptchaURL();
  dispatch(getCaptchaAC(response.data.url));

};
