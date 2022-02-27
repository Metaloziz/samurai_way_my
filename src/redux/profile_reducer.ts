import { v1 } from 'uuid';
import { ActionPT } from './store_redux';
import { Dispatch } from 'redux';
import { profileAPI, ResponsePutPhoto } from 'api/api';
import { ResultCode } from 'utils/enum/enum';
import {
  ADD_LIKE,
  ADD_POST,
  SET_PHOTO,
  SET_USER_PROFILE, SET_USER_PROFILE_DATA, SET_USER_STATUS,
} from 'redux/constTypeAC/constTypies';
import { stopSubmit } from 'redux-form';

export type addPostATPT = ReturnType<typeof addPostAC>
export type addLikeACPT = ReturnType<typeof addLikeAC>
export type setUserProfileACPT = ReturnType<typeof setUserProfileAC>
export type setUserStatusACPT = ReturnType<typeof setUserStatusAC>
export type setPhotoACPT = ReturnType<typeof setPhotoAC>
export type setUserProfileDataACPT = ReturnType<typeof setUserProfileDataAC>

export const addPostAC = (value: string) => ({
  type: ADD_POST,
  value,
  id: v1(),
} as const);
export const addLikeAC = (postID: string) => ({ type: ADD_LIKE, postID } as const);
export const setUserProfileAC = (profile: ProfileType) => ({
  type: SET_USER_PROFILE,
  profile,
} as const);
export const setUserStatusAC = (status: string) => ({
  type: SET_USER_STATUS,
  status,
} as const);
export const setPhotoAC = (file: ResponsePutPhoto) => ({
  type: SET_PHOTO,
  file,
} as const);
export const setUserProfileDataAC = (data: ProfileDataType) => {
  return {
    type: SET_USER_PROFILE_DATA,
    data,
  } as const;
};

export type initialStateProfileType = {
  postData: Array<PostDataType>
  newPostText: string
  profile: ProfileType
  status: string       // another request
}

export type PostDataType = {
  id: string
  message: string
  like: number
  comment: number
}

export type ProfileType = ProfileDataType & {
  userId: number
  photos: {
    small: string
    large: string
  }
}

export type ProfileDataType = {
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  aboutMe: string
}

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

const initialState: initialStateProfileType = {
  postData: [
    {
      id: v1(),
      message: 'Kiss me hard before you go Summertime sadness',
      like: 2,
      comment: 4,
    },
    {
      id: v1(),
      message: 'I just wanted you to know That baby you\'re the best',
      like: 7,
      comment: 8,
    },
  ],    // it is not from API
  newPostText: 'stock', // it is not from API
  profile: {
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: 'stock',
    fullName: 'test',
    contacts: {
      vk: 'stock',
      github: 'stock',
      facebook: 'stock',
      instagram: 'stock',
      mainLink: 'stock',
      twitter: 'stock',
      website: 'stock',
      youtube: 'stock',
    },
    aboutMe: 'stock',
    photos: {
      small: 'stock',
      large: 'stock',
    },
  },
  status: 'default status',
};

export const profile_reducer = (state = initialState, action: ActionPT): initialStateProfileType => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: action.id,
        message: action.value, // action.newText from redux form
        like: 0,
        comment: 0,
      };
      return { ...state, postData: [newPost, ...state.postData], newPostText: '' };
    // case CHANGE_POST:
    //     return {...state, newPostText: action.newText}
    case ADD_LIKE:
      return {
        ...state, postData: state.postData
          .map(post => post.id === action.postID ? {
            ...post,
            like: post.like + 1,
          } : post),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case SET_PHOTO:
      return {
        ...state, profile: { ...state.profile, photos: action.file.photos },
      };
    case SET_USER_PROFILE_DATA:

      let {
        lookingForAJobDescription,
        lookingForAJob,
        aboutMe,
        fullName,
        contacts,
      } = action.data;

      return {
        ...state,
        profile: {
          aboutMe: aboutMe,
          contacts: {
            ...contacts,
          },
          lookingForAJob: lookingForAJob,
          lookingForAJobDescription: lookingForAJobDescription,
          fullName: fullName,
          userId: 0,
          photos: {
            small: 'stock',
            large: 'stock',
          },
        },
      };
    default:
      return state;
  }
};

export const setUserTC = (userId: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.getUserData(userId);

  dispatch(setUserProfileAC(response));

};

export const setUserStatusTC = (userId: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.getUserStatus(userId);

  if (response) {
    dispatch(setUserStatusAC(response));
  } else {
    dispatch(setUserStatusAC('status from API is null'));
  }
};

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.updateUserStatus({ status });
  console.log(response);
  if (response.resultCode === ResultCode.success) {
    dispatch(setUserStatusAC(status));  // если запрос успешный, то обнови статус на тот, который отправил
  } else {
    console.warn(response.messages[0]);
  }
};

export const putPhotoTC = (file: File) => async (dispatch: Dispatch) => {

  let response = await profileAPI.putPhoto(file);
  if (response.resultCode === ResultCode.success) {
    dispatch(setPhotoAC(response.data));
  }
};

export const setProfileDataTC = (data: ProfileDataType, userId: string, setEditMod: (value: boolean) => void) => async (dispatch: Dispatch) => {
  let response = await profileAPI.updateUserData(data);
  if (response.resultCode === ResultCode.success) {
    let response = await profileAPI.getUserData(userId); // дублирование .. как запустить вторую санку ?
    dispatch(setUserProfileAC(response));
    setEditMod(false);
  } else {
    let action = stopSubmit('PROFILE', {
      // contacts: { vk: 'error' }, нужно распарсить строку
      _error: response.messages[0] ? response.messages[0] : 'something is wrong',
    });
    dispatch(action);
  }
};
