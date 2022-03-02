import { createSelector } from 'reselect';

import { dialogsItemsPT } from 'components/Messages/MessagesContainer';
import { UsersStatePT } from 'components/Users/UsersContainer';
import { ProfileType } from 'redux/profile_reducer';
import { AppStatePT } from 'redux/store_redux';

export const selectUsers = (state: AppStatePT): UsersStatePT => state.users; // примитивный селектор

export const selectUsersSuper = createSelector(
  selectUsers,
  users =>
    // помимо selectUsers могут быть и другие селекторы и результат будет закинут как аргумент в фн.
    users, // здесь может быть сложная фильтрация
);

export const selectProfilePage = (state: AppStatePT): ProfileType =>
  state.profilePage.profile;
export const selectProfilePageStatus = (state: AppStatePT): string =>
  state.profilePage.status;
export const selectAuthorisedUserID = (state: AppStatePT): string =>
  state.auth.data.id.toString();
export const selectDialogsPage = (state: AppStatePT): dialogsItemsPT => state.dialogsPage;
// export const selectAuth = (state: AppStatePT): boolean => state.auth.isAuth;
export const selectIsAuth = (state: AppStatePT): { isAuth: boolean } => ({
  isAuth: state.auth.isAuth,
});
export const selectCaptcha = (state: AppStatePT): { captchaURL: string } => ({
  captchaURL: state.auth.captchaURL,
});
