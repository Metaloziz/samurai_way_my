import { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppStatePT } from 'redux/store_redux';
import {
  followThunkCreator,
  // getUsersThunkCreator,
  setPageThunkCreator,
  unFollowThunkCreator,
} from 'redux/users_reducer';
import { Users } from './Users';
import { Preloader } from '../comonComponents/Preloader';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { compose } from 'redux';
import { selectUsersSuper } from 'utils/selectors/selectors';

export class UsersAPIcontainer extends Component<UsersStatePT & mapDispatchToPropsPT> {

  componentDidMount = () => {
    this.props.setPageThunkCreator(this.props.currentPage, this.props.pageSize);
  };

  setPage = (pageID: number) => {
    this.props.setPageThunkCreator(pageID, this.props.pageSize);
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

const mapStateToProps = (state: AppStatePT): UsersStatePT => {
  return selectUsersSuper(state);
};

let mapDispatchToProps: mapDispatchToPropsPT = {
  // getUsersThunkCreator,
  setPageThunkCreator,
  unFollowThunkCreator,
  followThunkCreator,
};

const UsersContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(UsersAPIcontainer);

export default UsersContainer;

export type mapDispatchToPropsPT = {
  // getUsersThunkCreator: (currentPage: number, pageSize: number) => void
  setPageThunkCreator: (pageID: number, pageSize: number) => void
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




