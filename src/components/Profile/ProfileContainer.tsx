import { Component, ComponentType } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import {
  ProfileDataType,
  ProfileType,
  putPhotoTC,
  setProfileDataTC,
  setUserStatusTC,
  setUserTC,
  updateUserStatusTC,
} from 'redux/profile_reducer';
import { AppStatePT } from 'redux/store_redux';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'utils/withRouter/WithRouter';
import {
  selectAuthorisedUserID,
  selectProfilePage,
  selectProfilePageStatus,
} from 'utils/selectors/selectors';

type PathParamPT = {
  userId: string
}

export class ProfileContainerAPI extends Component<mapStateToPropsPT
  & mapDispatchToPropsType
  & { params: PathParamPT }> {

  componentDidMount() {
    let {
      setUserStatus,
      setUser,
      authorisedUserID,
      params,
    } = this.props;

    let userID = params.userId;
    if (!userID) {
      userID = authorisedUserID;
    }
    setUser(userID);
    setUserStatus(userID);

  }

  render() {

    let {
      profile,
      setProfileData,
      updateUserStatus,
      status,
      params,
      setPhoto,
    } = this.props;

    return <Profile userId={params.userId}
                    profile={profile}
                    status={status}
                    savePhoto={setPhoto}
                    setProfileData={setProfileData}
                    updateUserStatus={
                      updateUserStatus} />;

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
  setProfileData: (data: ProfileDataType, userId: string, setEditMod: (value: boolean) => void) => void
}
const mapDispatchToProps: mapDispatchToPropsType = {
  setUser: setUserTC,
  setUserStatus: setUserStatusTC,
  updateUserStatus: updateUserStatusTC,
  setPhoto: putPhotoTC,
  setProfileData: setProfileDataTC,
};

const ProfileContainer = compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainerAPI);

export default ProfileContainer;


