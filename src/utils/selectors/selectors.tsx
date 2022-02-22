import { AppStatePT } from 'redux/store_redux';
import { createSelector } from 'reselect';
import { UsersStatePT } from 'components/Users/UsersContainer';

export const selectUsers = (state: AppStatePT): UsersStatePT => {
  return state.users; // примитивный селектор
};

export const selectUsersSuper = createSelector(selectUsers, (users) => {
  // помимо selectUsers могут быть и другие селекторы и результат будет закинут как аргумент в фн.
  return users; // здесь может быть сложная фильтрация
});

export const selectProfilePage = (state: AppStatePT) => state.profilePage.profile;
export const selectProfilePageStatus = (state: AppStatePT) => state.profilePage.status;
export const selectAuthorisedUserID = (state: AppStatePT) => state.auth.data.id.toString();
export const selectDialogsPage = (state: AppStatePT) => state.dialogsPage;
export const selectAuth = (state: AppStatePT) => state.auth.isAuth;
export const selectIsAuth = (state: AppStatePT) => ({ isAuth: state.auth.isAuth });
export const selectCaptcha = (state: AppStatePT) => ({ captchaURL: state.auth.captchaURL });