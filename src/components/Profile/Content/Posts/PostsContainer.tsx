import { connect } from 'react-redux';

import {
  addLikeAC,
  addPostAC,
  changePostAC,
  initialStateProfileType,
} from '../../../../redux_my/profile_reducer';
import { AppStatePT } from '../../../../redux_my/store_redux';

import { Posts } from './Posts';

export type profilePagePT = {
  profilePage: initialStateProfileType;
};

const mapStateToProps = (state: AppStatePT): profilePagePT => ({
  profilePage: state.profilePage,
});

const obj = { addPostAC, changePostAC, addLikeAC };

export const PostsContainer = connect(mapStateToProps, obj)(Posts);
