import { connect } from 'react-redux';

import { Posts } from './Posts';

import { addLikeAC, addPostAC, initialStateProfileType } from 'redux/profile_reducer';
import { AppStatePT } from 'redux/store_redux';

export type profilePagePT = {
  profilePage: initialStateProfileType;
};

const mapStateToProps = (state: AppStatePT): profilePagePT => ({
  profilePage: state.profilePage,
});

const obj = { addPostAC, addLikeAC };

export const PostsContainer = connect(mapStateToProps, obj)(Posts);
