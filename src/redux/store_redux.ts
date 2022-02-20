import {
  addLikeACPT,
  addPostATPT,
  profile_reducer, setPhotoACPT,
  setUserProfileACPT, setUserProfileDataACPT,
  setUserStatusACPT,
} from './profile_reducer';
import { addTextMessageATPT, dialogs_reducer } from './dialogs_reducer';
import { sidebar_reducer, sidebarATPT } from './sidebar_reducer';
import {
  changePageACPT,
  followATPT,
  setUsersATPT,
  toggleIsFetchingPageACPT,
  toggleIsFetchingUserACPT,
  users_reducer,
} from './users_reducer';
import { auth_reducer, setUserDataACPT } from './auth_reducer';
import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { app_reducer, setInitializedAPPACPT } from 'redux/app_reducer';

export type AppStatePT = ReturnType<typeof reducer>

export const reducer = combineReducers({
  sidebarPage: sidebar_reducer,
  profilePage: profile_reducer,
  dialogsPage: dialogs_reducer,
  users: users_reducer,
  auth: auth_reducer,
  form: formReducer,   // redux-form
  app: app_reducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<AppStatePT> = createStore(reducer, compose(applyMiddleware(thunkMiddleware), composeEnhancers()));

// // @ts-ignore
// window.store = store;

export type actionPT =
  addPostATPT
  // | changePostACPT
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

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStatePT, unknown, A>


