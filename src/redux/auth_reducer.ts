import { actionPT } from './store_redux';
import { userDataPT } from 'components/Header/Header';
import { Dispatch } from 'redux';
import { authMeAPI, loginAPIRequestType } from 'api/api';
import { stopSubmit } from 'redux-form';

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

export const setUserDataThunkCreator = () => (dispatch: Dispatch) => {
  return authMeAPI
    .me()
    .then((response) => {
        if (response.resultCode === 0) {
          dispatch(setUserDataAC(response, true));
        } else console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
      },
    );
};

export const setLoginThunkCreator = (userData: loginAPIRequestType) => (dispatch: Dispatch) => {
  authMeAPI
    .login(userData)
    .then((state) => {
        if (state.data.resultCode === 0) {
          authMeAPI.me()
            .then((response) => {
                if (response.resultCode === 0) {
                  dispatch(setUserDataAC(response, true));
                } else console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
              },
            );
        } else {
          let action = stopSubmit('LOGIN', {
            _error: state.data.messages[0] ? state.data.messages[0] : 'something is wrong',
            // email: 'email is wrong',
            // password: 'password is wrong',
          });
          dispatch(action);
          console.warn(state.data.messages[0]);
        }
      },
    );
};
export const setLogoutThunkCreator = () => (dispatch: Dispatch) => {
  authMeAPI
    .logout()
    .then((res) => {
      console.log(res);
      if (res.data.resultCode === 0) {
        authMeAPI.me()
          .then((response) => {
            if (response.resultCode !== 0) {
              dispatch(setUserDataAC(response, false));
            } else console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
          });
      }
    });
};
