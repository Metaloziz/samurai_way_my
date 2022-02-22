import { actionPT, BaseThunkType, ThunkType } from 'redux/store_redux';
import { setUserDataThunkCreator } from 'redux/auth_reducer';
import { FormAction } from 'redux-form';
import { SET_INITIALIZED } from 'redux/constTypeAC/constTypies';

export type setInitializedAPPACPT = ReturnType<typeof setInitializedAPPAC>

export type userDataInitialStateType = {
  initialized: boolean
}

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



export const initializeThunkCreator = (): ThunkType => async (dispatch) => {

  let promise = dispatch(setUserDataThunkCreator()); // вызов второй санки // всегда возвращается promise

  Promise.all([promise])
    .then(() => {
      dispatch(setInitializedAPPAC(true));
    });
};

