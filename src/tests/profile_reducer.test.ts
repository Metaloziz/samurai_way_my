import {
  addLikeAC,
  addPostAC,
  initialStateProfileType,
  profile_reducer, ProfileType, setUserProfileAC, setUserStatusAC,
} from 'redux/profile_reducer';

let profileInitialState: initialStateProfileType;

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
        message: 'I just wanted you to know That baby you\'re the best',
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

test('add new post', () => {
  // let newPostId = '3';
  let newTitle = 'newPostTitle';

  let action = addPostAC(newTitle);

  let endState = profile_reducer(profileInitialState, action);

  expect(endState).not.toBe(profileInitialState);
  expect(endState.postData.length).toBe(3);
  expect(endState.postData.filter(el => el.id === action.id).length).toBe(1);
  expect(endState.postData.filter(el => el.id === action.id)[0].message).toBe(newTitle);
});

test('add like', () => {

  let postID = '2';

  let action = addLikeAC(postID);

  let endState = profile_reducer(profileInitialState, action);

  expect(endState).not.toBe(profileInitialState);
  expect(endState.postData.filter(el => el.id == postID)[0].like).toBe(profileInitialState.postData.filter(el => el.id == postID)[0].like + 1);

});

test('set user profile data', () => {

  let profile: ProfileType = {
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

  let action = setUserProfileAC(profile);

  let endState = profile_reducer(profileInitialState, action);

  expect(endState).not.toBe(profileInitialState);
  expect(endState.profile.contacts.github).toBe(profile.contacts.github);
  expect(endState.profile.contacts.website).toBe(profile.contacts.website);
  expect(endState.profile.photos.small).toBe(profile.photos.small);

});

test('set user status', () => {

  let status = 'shelf';

  let action = setUserStatusAC(status);

  let endState = profile_reducer(profileInitialState, action);

  expect(endState).not.toBe(profileInitialState);
  expect(endState.status).toBe(status);

});


