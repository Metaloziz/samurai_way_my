import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { followAPI, userAPI } from 'api/api';
import { UserPT, UsersStatePT } from 'components/Users/UsersContainer';
import { CommonConstants, ResultCode } from 'utils/enum/enum';

type API_methodType = typeof followAPI.setUnFollow;

const usersState: UsersStatePT = {
  items: [
    {
      id: 0,
      name: 'null',
      status: 'null',
      photos: { small: 'null', large: 'null' },
      followed: false,
      isFetchingUser: false, // add this key  myself
    },
  ],
  pageSize: 4,
  totalCount: 36,
  error: 'Error',
  currentPage: 1,
  isFetchingPage: true, // add this key  myself
};

const slice = createSlice({
  name: 'user',
  initialState: usersState,
  reducers: {
    followAC(state, action: PayloadAction<{ userID: number }>) {
      const { userID } = action.payload;
      const userIndex = state.items.findIndex(({ id }) => id === userID);
      if (userIndex !== -CommonConstants.one) {
        state.items[userIndex].followed = !state.items[userIndex].followed;
      }
    },
    setUsersAC(state, action: PayloadAction<{ users: UserPT[]; totalCount: number }>) {
      const { users, totalCount } = action.payload;

      state.items = users;
      state.totalCount = totalCount;
    },
    changePageAC(state, action: PayloadAction<{ pageID: number }>) {
      state.currentPage = action.payload.pageID;
    },
    toggleIsFetchingPageAC(state, action: PayloadAction<{ isFetchingPage: boolean }>) {
      state.isFetchingPage = action.payload.isFetchingPage;
    },
    toggleIsFetchingUserAC(
      state,
      action: PayloadAction<{ isFetchingUser: boolean; userID: number }>,
    ) {
      const { userID, isFetchingUser } = action.payload;
      const userIndex = state.items.findIndex(({ id }) => id === userID);
      if (userIndex !== -CommonConstants.one) {
        state.items[userIndex].isFetchingUser = isFetchingUser;
      }
    },
  },
});

export const usersReducer = slice.reducer;
export const {
  followAC,
  setUsersAC,
  toggleIsFetchingPageAC,
  toggleIsFetchingUserAC,
  changePageAC,
} = slice.actions;

export const setPageThunkCreator =
  (pageID: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingPageAC({ isFetchingPage: true }));
    dispatch(changePageAC({ pageID }));
    const response = await userAPI.setUserOnPageAPI(pageID, pageSize);
    dispatch(setUsersAC({ users: response.items, totalCount: response.totalCount }));
    dispatch(toggleIsFetchingPageAC({ isFetchingPage: false }));
  };

const followUnfollowCB = async (
  userID: number,
  dispatch: Dispatch,
  setFollowMethodFromAPI: API_methodType,
): Promise<void> => {
  dispatch(toggleIsFetchingUserAC({ isFetchingUser: true, userID }));
  const response = await setFollowMethodFromAPI(userID);
  if (response.resultCode === ResultCode.success) {
    dispatch(followAC({ userID }));
    dispatch(toggleIsFetchingUserAC({ isFetchingUser: false, userID }));
  }
};

export const unFollowThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
  await followUnfollowCB(userID, dispatch, followAPI.setUnFollow);
};

export const followThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
  await followUnfollowCB(userID, dispatch, followAPI.setFollow);
};

export type followATPT = ReturnType<typeof followAC>;
export type setUsersATPT = ReturnType<typeof setUsersAC>;
export type changePageACPT = ReturnType<typeof changePageAC>;
export type toggleIsFetchingPageACPT = ReturnType<typeof toggleIsFetchingPageAC>;
export type toggleIsFetchingUserACPT = ReturnType<typeof toggleIsFetchingUserAC>;
