import React from 'react';
import { connect } from 'react-redux';
import { AppStatePT } from 'redux/store_redux';
import {
  followThunkCreator,
  getUsersThunkCreator,
  sePageThunkCreator,
  unFollowThunkCreator,
} from 'redux/users_reducer';
import { Users } from './Users';
import { Preloader } from '../comonComponents/Preloader';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { compose } from 'redux';

export class UsersAPIcontainer extends React.Component<UsersStatePT & mapDispatchToPropsPT> {

  componentDidMount = () => {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  };

  setPage = (pageID: number) => {
    this.props.sePageThunkCreator(pageID, this.props.pageSize);
  };

  unFollow = (userID: number) => {
    this.props.unFollowThunkCreator(userID);
  };

  follow = (userID: number) => {
    this.props.followThunkCreator(userID);
  };

  render() {
    return <div>
      {this.props.isFetchingPage
        ? <Preloader />
        : <Users items={this.props.items}
                 setPage={this.setPage}
                 unFollow={this.unFollow}
                 follow={this.follow}
                 pageSize={this.props.pageSize}
                 totalCount={this.props.totalCount}
                 currentPage={this.props.currentPage}
                 error={this.props.error}
                 isFetchingPage={this.props.isFetchingPage} />}
    </div>;
  }
}

const mapStateToProps: mapStateToPropsType = (state: AppStatePT): UsersStatePT => {
  return state.users;
};

let mapDispatchToProps: mapDispatchToPropsPT = {
  getUsersThunkCreator,
  sePageThunkCreator,
  unFollowThunkCreator,
  followThunkCreator,
};

export const UsersContainer = compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(UsersAPIcontainer);

type mapStateToPropsType = (state: AppStatePT) => UsersStatePT

export type mapDispatchToPropsPT = {
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void
  sePageThunkCreator: (pageID: number, pageSize: number) => void
  unFollowThunkCreator: (userID: number) => void
  followThunkCreator: (userID: number) => void
}
export type UsersStatePT = {
  items: UserPT[]
  pageSize: number
  totalCount: number
  error: string
  currentPage: number
  isFetchingPage: boolean
}
export type UserPT = {
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
  isFetchingUser: boolean
}




