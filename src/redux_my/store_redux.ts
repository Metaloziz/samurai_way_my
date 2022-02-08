import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import { authReducer, setUserDataACPT } from './auth_reducer';
import { addTextMessageATPT, dialogsReducer } from './dialogs_reducer';
import {
  addLikeACPT,
  addPostATPT,
  changePostACPT,
  profileReducer,
  setUserProfileACPT,
  setUserStatusACPT,
} from './profile_reducer';
import { sidebarATPT, sidebarReducer } from './sidebar_reducer';
import {
  changePageACPT,
  followATPT,
  setUsersATPT,
  toggleIsFetchingPageACPT,
  toggleIsFetchingUserACPT,
  usersReducer,
} from './users_reducer';

export type AppStatePT = ReturnType<typeof reducer>;

const reducer = combineReducers({
  sidebarPage: sidebarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer, // redux_my-form
});

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export type actionPT =
  | addPostATPT
  | changePostACPT
  | addTextMessageATPT
  | sidebarATPT
  | followATPT
  | setUsersATPT
  | changePageACPT
  | toggleIsFetchingPageACPT
  | toggleIsFetchingUserACPT
  | addLikeACPT
  | setUserProfileACPT
  | setUserDataACPT
  | setUserStatusACPT;
