import { ResponsePutPhoto } from 'api/api';
import {
  addLikeAC,
  addPostAC,
  initialStateProfileType,
  profileReducer,
  ProfileDataType,
  ProfileType,
  setPhotoAC,
  setUserProfileAC,
  setUserProfileDataAC,
  setUserStatusAC,
} from 'redux/profile_reducer';

let profileInitialState: initialStateProfileType;
const ONE = 1;
const ZERO = 0;

beforeEach(() => {
  profileInitialState = {
    postData: [
      {
        id: '1',
        message: 'Kiss me hard before you go Summertime sadness',
        like: 2,
        comment: 4,
      },
      {
        id: '2',
        message: "I just wanted you to know That baby you're the best",
        like: 7,
        comment: 8,
      },
    ],
    newPostText: 'stock',
    profile: {
      aboutMe: 'stock',
      contacts: {
        instagram: 'stock',
        facebook: 'stock',
        mainLink: 'stock',
        twitter: 'stock',
        website: 'stock',
        youtube: 'stock',
        github: 'stock',
        vk: 'stock',
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
});

describe('profile-reducer', () => {
  test('add new post', () => {
    const newTitle = 'newPostTitle';

    const action = addPostAC({ value: newTitle });

    const endState = profileReducer(profileInitialState, action);

    expect(endState).not.toBe(profileInitialState);
    expect(endState.postData.length).toBe(profileInitialState.postData.length + ONE);
    expect(endState.postData.filter(el => el.id === action.payload.value).length).toBe(
      ONE,
    );
    expect(
      endState.postData.filter(el => el.id === action.payload.value)[ZERO].message,
    ).toBe(newTitle);
  });

  test('add like', () => {
    const postID = '2';

    const action = addLikeAC({ postID });

    const endState = profileReducer(profileInitialState, action);

    expect(endState).not.toBe(profileInitialState);
    expect(endState.postData.filter(el => el.id === postID)[ZERO].like).toBe(
      profileInitialState.postData.filter(el => el.id === postID)[ZERO].like + ONE,
    );
  });

  test('set user profile data', () => {
    const profile: ProfileType = {
      userId: 1,
      lookingForAJob: false,
      lookingForAJobDescription: 'no',
      photos: {
        small: 'proof',
        large: 'drop',
      },
      aboutMe: 'burst',
      fullName: 'flat',
      contacts: {
        instagram: 'instagram',
        facebook: 'facebook',
        mainLink: 'mainLink',
        twitter: 'twitter',
        website: 'website',
        youtube: 'youtube',
        github: 'github',
        vk: 'vk',
      },
    };

    const action = setUserProfileAC({ profile });

    const endState = profileReducer(profileInitialState, action);

    expect(endState).not.toBe(profileInitialState);
    expect(endState.profile.contacts.github).toBe(profile.contacts.github);
    expect(endState.profile.contacts.website).toBe(profile.contacts.website);
  });

  test('set user status', () => {
    const status = 'shelf';

    const action = setUserStatusAC({ status });

    const endState = profileReducer(profileInitialState, action);

    expect(endState).not.toBe(profileInitialState);
    expect(endState.status).toBe(status);
  });

  test('set user photo ', () => {
    const file: ResponsePutPhoto = {
      photos: {
        small: 'tree',
        large: 'radio',
      },
    };

    const action = setPhotoAC({ file });

    const endState = profileReducer(profileInitialState, action);

    expect(endState).not.toBe(profileInitialState);
    expect(endState.profile.photos.small).toBe(file.photos.small);
    expect(endState.profile.photos.large).toBe(file.photos.large);
  });

  test('set user profile data', () => {
    const profile: ProfileDataType = {
      lookingForAJob: true,
      lookingForAJobDescription: 'bell',
      aboutMe: 'burst',
      fullName: 'flat',
      contacts: {
        instagram: 'instagram',
        facebook: 'facebook',
        mainLink: 'mainLink',
        twitter: 'twitter',
        website: 'website',
        youtube: 'youtube',
        github: 'github',
        vk: 'vk',
      },
    };

    const action = setUserProfileDataAC({ data: profile });

    const endState = profileReducer(profileInitialState, action);

    expect(endState).not.toBe(profileInitialState);
    expect(endState.profile.lookingForAJobDescription).toBe(
      profile.lookingForAJobDescription,
    );
    expect(endState.profile.lookingForAJob).toBe(profile.lookingForAJob);
    expect(endState.profile.aboutMe).toBe(profile.aboutMe);
  });
});
