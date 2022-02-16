import { AppStatePT } from 'redux/store_redux';

export const selectUsers = (state: AppStatePT) => state.users;
export const selectProfilePage = (state: AppStatePT) => state.profilePage.profile;
export const selectProfilePageStatus = (state: AppStatePT) => state.profilePage.status;
export const selectAuthorisedUserID = (state: AppStatePT) => state.auth.data.id.toString();
export const selectDialogsPage = (state: AppStatePT) => state.dialogsPage;
export const selectAuth = (state: AppStatePT) => state.auth.isAuth;
export const selectIsAuth = (state: AppStatePT) => ({ isAuth: state.auth.isAuth });