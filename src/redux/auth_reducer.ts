import { actionPT } from './store_redux';
import { userDataPT } from 'components/Header/Header';
import { Dispatch } from 'redux';
import { authMeAPI, loginAPIRequestType } from 'api/api';
import { stopSubmit } from 'redux-form';
import { ThunkType } from 'redux/app_reducer';
import { ResultCode } from 'utils/enum/enum';

export type setUserDataACPT = ReturnType<typeof setUserDataAC>

export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserDataAC = (data: userDataPT, isAuth: boolean) => ({
  type: SET_USER_DATA,
  data,
  isAuth,
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
};

export const auth_reducer = (state = userDataInitialState, action: actionPT): userDataPT => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: action.isAuth };
    default:
      return state;
  }
};

export const setUserDataThunkCreator = () => async (dispatch: Dispatch) => {
  let response = await authMeAPI.me();

  if (response.resultCode === ResultCode.success) {
    dispatch(setUserDataAC(response, true));
  } else {
    console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
  }

};

export const setLoginThunkCreator = (userData: loginAPIRequestType): ThunkType => async (dispatch) => {
  let response = await authMeAPI.login(userData);

  if (response.data.resultCode === ResultCode.success) {
    await dispatch(setUserDataThunkCreator()); // вызов другой санки
  } else {
    let action = stopSubmit('LOGIN', {
      _error: response.data.messages[0] ? response.data.messages[0] : 'something is wrong',
      // email: 'email is wrong',
      // password: 'password is wrong',
    });
    dispatch(action);
    console.warn(response.data.messages[0]);
  }
};
export const setLogoutThunkCreator = () => async (dispatch: Dispatch) => {
  let response = await authMeAPI.logout();

  if (response.data.resultCode === ResultCode.success) {
    let response = await authMeAPI.me();
    if (response.resultCode !== ResultCode.success) {
      dispatch(setUserDataAC(response, false));
    } else console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
  }
};
