import { v1 } from 'uuid';
import { actionPT } from './store_redux';
import { Dispatch } from 'redux';
import { profileAPI, ResponsePutPhoto } from 'api/api';
import { ResultCode } from 'utils/enum/enum';

export type addPostATPT = ReturnType<typeof addPostAC>
// export type changePostACPT = ReturnType<typeof changePostAC>
export type addLikeACPT = ReturnType<typeof addLikeAC>
export type setUserProfileACPT = ReturnType<typeof setUserProfileAC>
export type setUserStatusACPT = ReturnType<typeof setUserStatusAC>
export type setPhotoACPT = ReturnType<typeof setPhotoAC>
export type setUserProfileDataACPT = ReturnType<typeof setUserProfileDataAC>

export const ADD_POST = 'ADD-POST';
export const SET_PHOTO = 'SET_PHOTO';
// export const CHANGE_POST = 'CHANGE_POST'
export const ADD_LIKE = 'ADD_LIKE';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_USER_STATUS = 'SET_USER_STATUS';
export const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA';

export const addPostAC = (value: string) => ({
  type: ADD_POST,
  value,
  id: v1(),
} as const);
// export const changePostAC = (newText: string) => ({
//     type: CHANGE_POST,
//     newText: newText
// } as const)
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

export type ProfileType = {    // data from API
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  aboutMe: string
  photos: {
    small: string
    large: string
  }
}

export type ProfileDataType = {
  // userId: number
  AboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
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

const initialState: initialStateProfileType =
  {
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
    newPostText: 'stock',
    profile: {
      aboutMe: 'stock',
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
      lookingForAJob: false,
      lookingForAJobDescription: 'stock',
      fullName: 'test',
      userId: 0,
      photos: {
        small: 'stock',
        large: 'stock',
      },
    },
    status: 'default status',
  };

export const profile_reducer = (state = initialState, action: actionPT): initialStateProfileType => {

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
        AboutMe,
        fullName,
        contacts,
      } = action.data;

      return {
        ...state,
        profile: {
          aboutMe: AboutMe,
          contacts: {
            ...contacts,
          },
          lookingForAJob: false,
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

export const setUserThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.getUserData(userId);

  dispatch(setUserProfileAC(response));

};

export const setUserStatusThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.getUserStatus(userId);

  if (response) {
    dispatch(setUserStatusAC(response));
  } else {
    dispatch(setUserStatusAC('status from API is null'));
  }
};

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.updateUserStatus(status);

  console.log(response);
  if (response.resultCode === ResultCode.success) {
    dispatch(setUserStatusAC(status));  // если запрос успешный, то обнови статус на тот, который отправил
  }
};

export const putPhotoThunkCreator = (file: File) => async (dispatch: Dispatch) => {

  let response = await profileAPI.putPhoto(file);
  if (response.resultCode === ResultCode.success) {
    dispatch(setPhotoAC(response.data));
  }
};

export const petProfileDataThunkCreator = (data: ProfileDataType) => async (dispatch: Dispatch) => {
  let response = await profileAPI.updateUserData(data);
  if (response.resultCode === ResultCode.success) {
    dispatch(setUserProfileDataAC(data));
  }
};
