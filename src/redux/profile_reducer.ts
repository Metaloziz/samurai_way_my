import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { v1 } from 'uuid';

import { NewThunkType } from './store_redux';

import { profileAPI, ResponsePutPhoto } from 'api/api';
import { CommonConstants, ResultCode } from 'utils/enum/enum';

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
      message: "I just wanted you to know That baby you're the best",
      like: 7,
      comment: 8,
    },
  ], // it is not from API
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

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPostAC(state, action: PayloadAction<{ value: string }>) {
      const newPost = {
        id: action.payload.value,
        message: action.payload.value, // action.newText from redux form
        like: 0,
        comment: 0,
      };
      state.postData.unshift(newPost);
      state.newPostText = '';
    },
    addLikeAC(state, action: PayloadAction<{ postID: string }>) {
      const { postID } = action.payload;
      const postIndex = state.postData.findIndex(({ id }) => id === postID);
      state.postData[postIndex].like += 1;
    },
    setUserProfileAC(state, action: PayloadAction<{ profile: ProfileType }>) {
      state.profile = action.payload.profile;
    },
    setUserStatusAC(state, action: PayloadAction<{ status: string }>) {
      state.status = action.payload.status;
    },
    setPhotoAC(state, action: PayloadAction<{ file: ResponsePutPhoto }>) {
      state.profile.photos = action.payload.file.photos;
    },
    setUserProfileDataAC(state, action: PayloadAction<{ data: ProfileDataType }>) {
      state.profile = { ...state.profile, ...action.payload.data };
    },
  },
});

export const profileReducer = slice.reducer;

export const {
  addPostAC,
  setPhotoAC,
  setUserProfileAC,
  setUserProfileDataAC,
  setUserStatusAC,
  addLikeAC,
} = slice.actions;

// export const profileReducer = (
//   state = initialState,
//   action: ActionPT,
// ): initialStateProfileType => {
//   const newPost = {
//     id: '',
//     message: '', // action.newText from redux form
//     like: 0,
//     comment: 0,
//   };
//   switch (action.type) {
//     case ADD_POST:
//       newPost.id = action.id;
//       newPost.message = action.value;
//       return { ...state, postData: [newPost, ...state.postData], newPostText: '' };
//     // case CHANGE_POST:
//     //     return {...state, newPostText: action.newText}
//     case ADD_LIKE:
//       return {
//         ...state,
//         postData: state.postData.map(post =>
//           post.id === action.postID
//             ? {
//                 ...post,
//                 like: post.like + CommonConstants.one,
//               }
//             : post,
//         ),
//       };
//     case SET_USER_PROFILE:
//       return { ...state, profile: action.profile };
//     case SET_USER_STATUS:
//       return { ...state, status: action.status };
//     case SET_PHOTO:
//       return {
//         ...state,
//         profile: { ...state.profile, photos: action.file.photos },
//       };
//     case SET_USER_PROFILE_DATA:
//       return {
//         ...state,
//         profile: {
//           ...state.profile,
//           ...action.data,
//         },
//       };
//     default:
//       return state;
//   }
// };

export const setUserTC = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.getUserData(userId);
  dispatch(setUserProfileAC({ profile: response }));
};

export const setUserStatusTC = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.getUserStatus(userId);

  if (response) {
    dispatch(setUserStatusAC(response));
  } else {
    dispatch(setUserStatusAC({ status: 'status from API is null' }));
  }
};

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.updateUserStatus({ status });
  // eslint-disable-next-line no-console
  console.log(response);
  if (response.resultCode === ResultCode.success) {
    dispatch(setUserStatusAC({ status })); // если запрос успешный, то обнови статус на тот, который отправил
  } else {
    // eslint-disable-next-line no-console
    console.warn(response.messages[CommonConstants.zero]);
  }
};

export const putPhotoTC = (file: File) => async (dispatch: Dispatch) => {
  const response = await profileAPI.putPhoto(file);
  if (response.resultCode === ResultCode.success) {
    dispatch(setPhotoAC({ file: response.data }));
  }
};

export const setProfileDataTC =
  (
    data: ProfileDataType,
    userId: string,
    setEditMod: (value: boolean) => void,
  ): NewThunkType =>
  async dispatch => {
    const response = await profileAPI.updateUserData(data);
    if (response.resultCode === ResultCode.success) {
      // const nextResponse = await profileAPI.getUserData(userId); // дублирование .. как запустить вторую санку ?
      // dispatch(setUserProfileAC(nextResponse));
      await dispatch(setUserTC(userId));
      setEditMod(false);
    } else {
      // const action = stopSubmit('PROFILE', {
      //   _error: response.messages[CommonConstants.zero]
      //     ? response.messages[CommonConstants.zero]
      //     : 'something is wrong',
      // });
      // dispatch(action);
    }
  };

export type addPostATPT = ReturnType<typeof addPostAC>;
export type addLikeACPT = ReturnType<typeof addLikeAC>;
export type setUserProfileACPT = ReturnType<typeof setUserProfileAC>;
export type setUserStatusACPT = ReturnType<typeof setUserStatusAC>;
export type setPhotoACPT = ReturnType<typeof setPhotoAC>;
export type setUserProfileDataACPT = ReturnType<typeof setUserProfileDataAC>;

export type initialStateProfileType = {
  postData: Array<PostDataType>;
  newPostText: string;
  profile: ProfileType;
  status: string; // another request
};

export type PostDataType = {
  id: string;
  message: string;
  like: number;
  comment: number;
};

export type ProfileType = ProfileDataType & {
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type ProfileDataType = {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  aboutMe: string;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
