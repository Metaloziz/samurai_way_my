import {
  addLikeAC,
  addPostAC,
  initialStateProfileType,
} from 'redux/profile_reducer';
import { Posts } from './Posts';
import { connect } from 'react-redux';
import { AppStatePT } from 'redux/store_redux';

export type profilePagePT = {
  profilePage: initialStateProfileType
}

const mapStateToProps = (state: AppStatePT): profilePagePT => {
  return {
    profilePage: state.profilePage,
  };
};

let obj = { addPostAC, addLikeAC };

export const PostsContainer = connect(mapStateToProps, obj)(Posts);