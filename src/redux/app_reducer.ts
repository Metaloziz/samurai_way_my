import { actionPT, BaseThunkType, ThunkType } from 'redux/store_redux';
import { setUserDataTC } from 'redux/auth_reducer';
import { FormAction } from 'redux-form';
import { SET_INITIALIZED } from 'redux/constTypeAC/constTypies';

export type setInitializedAPPACPT = ReturnType<typeof setInitializedAPPAC>

export type UserDataInitialStateType = {
  initialized: boolean
}

export const setInitializedAPPAC = (initialized: boolean) => ({
  type: SET_INITIALIZED,
  initialized,
} as const);

const userDataInitialState: UserDataInitialStateType = {
  initialized: false,
};

export const app_reducer = (state = userDataInitialState, action: actionPT): UserDataInitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: action.initialized };
    default:
      return state;
  }
};

export const initializeTC = (): ThunkType => async (dispatch) => {

  let promise = dispatch(setUserDataTC()); // вызов второй санки // всегда возвращается promise

  Promise.all([promise])
    .then(() => {
      dispatch(setInitializedAPPAC(true));
    });
};

