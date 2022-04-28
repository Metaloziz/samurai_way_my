import { Component, ComponentType, ReactElement } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Preloader } from '../comonComponents/Preloader';

import { Users } from './Users';

import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { AppStatePT } from 'redux/store_redux';
import {
  followThunkCreator,
  setPageThunkCreator,
  unFollowThunkCreator,
} from 'redux/users_reducer';
import { selectUsersSuper } from 'utils/selectors/selectors';

export class UsersAPIcontainer extends Component<UsersStatePT & mapDispatchToPropsPT> {
  componentDidMount(): void {
    const { setPageHandle, currentPage, pageSize } = this.props;
    setPageHandle(currentPage, pageSize);
  }

  setPage = (pageID: number): void => {
    const { setPageHandle, pageSize } = this.props;
    setPageHandle(pageID, pageSize);
  };

  unFollow = (userID: number): void => {
    const { setUnFollowHandle } = this.props;
    setUnFollowHandle(userID);
  };

  follow = (userID: number): void => {
    const { setFollowHandle } = this.props;
    setFollowHandle(userID);
  };

  render(): ReactElement {
    const { isFetchingPage, items, pageSize, totalCount, currentPage, error } =
      this.props;
    return (
      <div>
        {isFetchingPage ? (
          <Preloader />
        ) : (
          <Users
            items={items}
            setPage={this.setPage}
            unFollow={this.unFollow}
            follow={this.follow}
            pageSize={pageSize}
            totalCount={totalCount}
            currentPage={currentPage}
            error={error}
            isFetchingPage={isFetchingPage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStatePT): UsersStatePT => selectUsersSuper(state);

const mapDispatchToProps: mapDispatchToPropsPT = {
  setPageHandle: setPageThunkCreator,
  setUnFollowHandle: unFollowThunkCreator,
  setFollowHandle: followThunkCreator,
};

const UsersContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(UsersAPIcontainer);

export default UsersContainer;

export type mapDispatchToPropsPT = {
  setPageHandle: (pageID: number, pageSize: number) => void;
  setUnFollowHandle: (userID: number) => void;
  setFollowHandle: (userID: number) => void;
};
export type UsersStatePT = {
  items: UserPT[];
  pageSize: number;
  totalCount: number;
  error: string;
  currentPage: number;
  isFetchingPage: boolean;
};
export type UserPT = {
  id: number;
  name: string;
  status: string;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
  isFetchingUser: boolean;
};
