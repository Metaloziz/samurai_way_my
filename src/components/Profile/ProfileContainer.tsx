import React, { Component } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import {
  ProfileType,
  setUserStatusThunkCreator,
  setUserThunkCreator,
  updateUserStatusThunkCreator,
} from 'redux/profile_reducer';
import { AppStatePT } from 'redux/store_redux';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { compose } from 'redux';

type PathParamPT = {
  userId: string
}

export class ProfileContainerAPI extends Component<mapStateToPropsPT
  & mapDispatchToPropsType
  & { params: PathParamPT }> {

  componentDidMount() {

    let userID = this.props.params.userId;

    if (!userID) {
      userID = '21608';
    }

    this.props.setUserThunkCreator(userID);
    this.props.setUserStatusThunkCreator(userID);
    // let userId = this.props.params.userId
    //
    // if (!userId) {
    //     userId = '2';
    // }
    //
    // profileAPI(userId).then((state) => {
    //     this.props.setUserProfileAC(state)
    //     console.log('profileAPI')
    // })
    // debugger
  }

  render() {
    return <Profile profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatusThunkCreator={
                      this.props.updateUserStatusThunkCreator} />;

  }
}

type mapStateToPropsPT = {
  profile: ProfileType
  status: string
}
const mapStateToProps = (state: AppStatePT): mapStateToPropsPT => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

type mapDispatchToPropsType = {
  setUserThunkCreator: (useId: string) => void
  setUserStatusThunkCreator: (status: string) => void
  updateUserStatusThunkCreator: (status: string) => void
}
const mapDispatchToProps: mapDispatchToPropsType = {
  setUserThunkCreator: setUserThunkCreator,
  setUserStatusThunkCreator: setUserStatusThunkCreator,
  updateUserStatusThunkCreator: updateUserStatusThunkCreator,
};

export const withRouter = (WrappedComponent: typeof React.Component) => {
  return (props: object) => {
    const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.
    return (
      <WrappedComponent {...props} params={params} />
    );
  };
};

export const ProfileContainer = compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainerAPI);

// const ProfileContainerURL = withRouter(ProfileContainerAPI)
//
// let connectComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerURL)
//
// export const ProfileContainer = withAuthRedirect(connectComponent)
//


