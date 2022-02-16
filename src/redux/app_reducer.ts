import { actionPT, BaseThunkType } from 'redux/store_redux';
import { setUserDataThunkCreator } from 'redux/auth_reducer';
import { FormAction } from 'redux-form';

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

export type ThunkType = BaseThunkType<actionPT | FormAction> //типизация для вызова санки внутри санки

export const initializeThunkCreator = (): ThunkType => async (dispatch) => {

  let promise = dispatch(setUserDataThunkCreator()); // вызов второй санки

  Promise.all([promise])
    .then(() => {
      dispatch(setInitializedAPPAC(true));
    });

};
