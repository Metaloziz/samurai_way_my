import { actionPT } from './store_redux';
import { UserPT, UsersStatePT } from 'components/Users/UsersContainer';
import { Dispatch } from 'redux';
import { followAPI, UserAPI } from 'api/api';
import { ResultCode } from 'utils/enum/enum';
import {
  CHANGE_PAGE,
  FOLLOW,
  SET_USERS,
  TOGGLE_IS_FETCHING_PAGE, TOGGLE_IS_FETCHING_USER,
} from 'redux/constTypeAC/constTypies';

type API_methodType = typeof followAPI.setUnFollow

export type followATPT = ReturnType<typeof followAC>
export type setUsersATPT = ReturnType<typeof setUsersAC>
export type changePageACPT = ReturnType<typeof changePageAC>
export type toggleIsFetchingPageACPT = ReturnType<typeof toggleIsFetchingPageAC>
export type toggleIsFetchingUserACPT = ReturnType<typeof toggleIsFetchingUserAC>

export const followAC = (userID: number) => ({ type: FOLLOW, userID } as const);
export const setUsersAC = (users: UserPT[], totalCount: number) => ({
  type: SET_USERS,
  users,
  totalCount,
} as const);
export const changePageAC = (pageID: number) => ({
  type: CHANGE_PAGE,
  pageID,
} as const);
export const toggleIsFetchingPageAC = (isFetchingPage: boolean) => ({
  type: TOGGLE_IS_FETCHING_PAGE,
  isFetchingPage,
} as const);
export const toggleIsFetchingUserAC = (isFetchingUser: boolean, userID: number) => ({
  type: TOGGLE_IS_FETCHING_USER,
  isFetchingUser,
  userID,
} as const);

let usersState: UsersStatePT = {
  items: [
    {
      id: 0,
      name: 'null',
      status: 'null',
      photos: { small: 'null', large: 'null' },
      followed: false,
      isFetchingUser: false,  // add this key  myself
    }],
  pageSize: 4,
  totalCount: 36,
  error: 'Error',
  currentPage: 1,
  isFetchingPage: true,          // add this key  myself
};

export const users_reducer = (state: UsersStatePT = usersState, action: actionPT): UsersStatePT => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, items: state.items
          .map(user => user.id === action.userID ? {
            ...user,
            followed: !user.followed,
          } : user),
      };
    case SET_USERS:
      return { ...state, items: action.users, totalCount: action.totalCount };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.pageID };
    case TOGGLE_IS_FETCHING_PAGE:
      return { ...state, isFetchingPage: action.isFetchingPage };
    case TOGGLE_IS_FETCHING_USER:
      return {
        ...state, items: state.items
          .map(user => user.id === action.userID ? {
            ...user,
            isFetchingUser: action.isFetchingUser,
          } : user),
      };
    default:
      return state;
  }
};

export const setPageThunkCreator = (pageID: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(toggleIsFetchingPageAC(true));
  dispatch(changePageAC(pageID));
  let response = await UserAPI.setUserOnPageAPI(pageID, pageSize);
  dispatch(setUsersAC(response.items, response.totalCount));
  dispatch(toggleIsFetchingPageAC(false));
};

const followUnfollowCB = async (userID: number, dispatch: Dispatch, API_method: API_methodType) => {
  dispatch(toggleIsFetchingUserAC(true, userID));
  let response = await API_method(userID);
  if (response.resultCode === ResultCode.success) {
    dispatch(followAC(userID));
    dispatch(toggleIsFetchingUserAC(false, userID));
  }
};

export const unFollowThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
  await followUnfollowCB(userID, dispatch, followAPI.setUnFollow);
};

export const followThunkCreator = (userID: number) => async (dispatch: Dispatch) => {
  await followUnfollowCB(userID, dispatch, followAPI.setFollow);
};

