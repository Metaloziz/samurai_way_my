import React, { ReactElement } from 'react';

import { connect } from 'react-redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AppStatePT } from '../../redux_my/store_redux';
import {
  followThunkCreator,
  getUsersThunkCreator,
  sePageThunkCreator,
  unFollowThunkCreator,
} from '../../redux_my/users_reducer';
import { Preloader } from '../comonComponents/Preloader';

import { Users } from './Users';

export type mapDispatchToPropsPT = {
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  sePageThunkCreator: (pageID: number, pageSize: number) => void;
  unFollowThunkCreator: (userID: number) => void;
  followThunkCreator: (userID: number) => void;
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

export class UsersAPIcontainer extends React.Component<
  UsersStatePT & mapDispatchToPropsPT
> {
  componentDidMount = (): void => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    // debugger
    // this.props.toggleIsFetchingPageAC(true)
    // setUserDataAPI(this.props.currentPage, this.props.pageSize)
    //     .then((state) => {
    //         console.log('setUserDataAPI')
    //         this.props.setUsersAC(state.items, state.totalCount)
    //     })
    // this.props.toggleIsFetchingPageAC(false)
  };

  setPage = (pageID: number): void => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.sePageThunkCreator(pageID, this.props.pageSize);
    //
    // this.props.toggleIsFetchingPageAC(true)
    //
    // this.props.changePageAC(pageID)
    // setUserOnPageAPI(pageID, this.props.pageSize)
    //     .then((state) => {
    //         this.props.setUsersAC(state.items, state.totalCount)
    //         this.props.toggleIsFetchingPageAC(false)
    //         console.log('setUserOnPageAPI')
    //     })
  };

  unFollow = (userID: number): void => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.unFollowThunkCreator(userID);
    // this.props.toggleIsFetchingUserAC(true, userID)
    // setUnFollowAPI(userID)
    //     .then(response => {
    //             if (response.resultCode === 0) {
    //                 this.props.followAC(userID)
    //                 this.props.toggleIsFetchingUserAC(false, userID)
    //                 console.log('unFollow')
    //             }
    //         }
    //     )
  };

  follow = (userID: number): void => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.followThunkCreator(userID);
    // this.props.toggleIsFetchingUserAC(true, userID)
    // setFollowAPI(userID)
    //     .then(response => {
    //             if (response.resultCode === 0) {
    //                 this.props.followAC(userID)
    //                 this.props.toggleIsFetchingUserAC(false, userID)
    //                 console.log('Follow')
    //             }
    //         }
    //     )
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

type mapStateToPropsType = (state: AppStatePT) => UsersStatePT;

const mapStateToProps: mapStateToPropsType = (state: AppStatePT): UsersStatePT =>
  state.users;

const mapDispatchToProps: mapDispatchToPropsPT = {
  getUsersThunkCreator,
  sePageThunkCreator,
  unFollowThunkCreator,
  followThunkCreator,
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps)(UsersAPIcontainer);

export const UsersContainer = withAuthRedirect(connectComponent);

// setUsersAC: (props)=> dispatch(setUsersAC(props))
