import { actionPT } from 'redux/store_redux';
import { Dispatch } from 'redux';
import { setUserDataAC } from 'redux/auth_reducer';
import { authMeAPI } from 'api/api';

export type setInitializedAPPACPT = ReturnType<typeof setInitializedAPPAC>

export type userDataInitialStateType = {
  initialized: boolean
}

export const SET_INITIALIZED = 'SET_INITIALIZED';

export const setInitializedAPPAC = (initialized: boolean) => ({
  type: SET_INITIALIZED,
  initialized,

} as const);

const userDataInitialState: userDataInitialStateType = {
  initialized: false,
};

export const app_reducer = (state = userDataInitialState, action: actionPT): userDataInitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: action.initialized };
    default:
      return state;
  }
};

export const initializeThunkCreator = () => (dispatch: Dispatch) => {

  let promise = authMeAPI
    .me()
    .then((response) => {
        if (response.resultCode === 0) {
          dispatch(setUserDataAC(response, true));
        } else console.warn(' You are not authorised. ResultCode: ' + response.resultCode);
      },
    );

  Promise.all([promise])
    .then(() => {
      dispatch(setInitializedAPPAC(true));
    });

};
