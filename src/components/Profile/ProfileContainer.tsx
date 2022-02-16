import { Component, ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import {
  ProfileType,
  setUserStatusThunkCreator,
  setUserThunkCreator,
  updateUserStatusThunkCreator,
} from 'redux/profile_reducer';
import { AppStatePT } from 'redux/store_redux';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'utils/withRouter/WithRouter';
import {
  selectAuthorisedUserID,
  selectProfilePage, selectProfilePageStatus,
} from 'utils/selectors/selectUsers';

type PathParamPT = {
  userId: string
}

export class ProfileContainerAPI extends Component<mapStateToPropsPT
  & mapDispatchToPropsType
  & { params: PathParamPT }> {

  componentDidMount() {
    let userID = this.props.params.userId;
    if (!userID) {
      userID = this.props.authorisedUserID;
    }
    this.props.setUserThunkCreator(userID);
    this.props.setUserStatusThunkCreator(userID);
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
  authorisedUserID: string
}

const mapStateToProps = (state: AppStatePT): mapStateToPropsPT => {
  return {
    profile: selectProfilePage(state),
    status: selectProfilePageStatus(state),
    authorisedUserID: selectAuthorisedUserID(state),
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

export const ProfileContainer = compose<ComponentType>(
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


