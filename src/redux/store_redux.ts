import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import { authReducer, getCaptchaACPT, setUserDataACPT } from './auth_reducer';
import { addTextMessageATPT, dialogsReducer } from './dialogs_reducer';
import {
  addLikeACPT,
  addPostATPT,
  profileReducer,
  setPhotoACPT,
  setUserProfileACPT,
  setUserProfileDataACPT,
  setUserStatusACPT,
} from './profile_reducer';
import { sidebarReducer, sidebarATPT } from './sidebar_reducer';
import {
  changePageACPT,
  followATPT,
  setUsersATPT,
  toggleIsFetchingPageACPT,
  toggleIsFetchingUserACPT,
  usersReducer,
} from './users_reducer';

import { appReducer, setInitializedAPPACPT } from 'redux/app_reducer';

export type AppStatePT = ReturnType<typeof reducer>;

export const reducer = combineReducers({
  sidebarPage: sidebarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer, // redux-form
  app: appReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<AppStatePT> = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware), composeEnhancers()),
);

// // @ts-ignore
// window.store = store;

export type ActionPT =
  | addPostATPT
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
  | setUserStatusACPT
  | setInitializedAPPACPT
  | setPhotoACPT
  | setUserProfileDataACPT
  | getCaptchaACPT;

export type NewThunkType = ThunkAction<void, AppStatePT, unknown, ActionPT>;
