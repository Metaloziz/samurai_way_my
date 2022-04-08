import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setUserDataTC } from 'redux/auth_reducer';
import { NewThunkType } from 'redux/store_redux';

const userDataInitialState: UserDataInitialStateType = {
  initialized: false,
};

const slice = createSlice({
  name: 'App',
  initialState: userDataInitialState,
  reducers: {
    setInitializedAPPAC(state, action: PayloadAction<{ initialized: boolean }>) {
      state.initialized = action.payload.initialized; // need off rule from 41 stroke
    },
  },
});

export const appReducer = slice.reducer;
export const { setInitializedAPPAC } = slice.actions;

export const initializeTC = (): NewThunkType => async dispatch => {
  const promise = dispatch(setUserDataTC()); // вызов второй санки // всегда возвращается promise

  Promise.all([promise]).then(() => {
    dispatch(setInitializedAPPAC({ initialized: true }));
  });
};

export type setInitializedAPPACPT = ReturnType<typeof setInitializedAPPAC>;

export type UserDataInitialStateType = {
  initialized: boolean;
};
