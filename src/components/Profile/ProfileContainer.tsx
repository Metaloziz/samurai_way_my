import { Component, ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import {
  petProfileDataThunkCreator, ProfileDataType,
  ProfileType, putPhotoThunkCreator,
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
} from 'utils/selectors/selectors';

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
    this.props.setUser(userID);
    this.props.setUserStatus(userID);

  }

  render() {
    return <Profile userId={this.props.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    savePhoto={this.props.setPhoto}
                    setProfileData={this.props.setProfileData}
                    updateUserStatus={
                      this.props.updateUserStatus} />;

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
  setUser: (useId: string) => void
  setUserStatus: (status: string) => void
  updateUserStatus: (status: string) => void
  setPhoto: (file: File) => void
  setProfileData: (data: ProfileDataType) => void
}
const mapDispatchToProps: mapDispatchToPropsType = {
  setUser: setUserThunkCreator,
  setUserStatus: setUserStatusThunkCreator,
  updateUserStatus: updateUserStatusThunkCreator,
  setPhoto: putPhotoThunkCreator,
  setProfileData: petProfileDataThunkCreator,
};

const ProfileContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainerAPI);

export default ProfileContainer;


