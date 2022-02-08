import { Component, ComponentType, ReactElement } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  ProfileType,
  setUserStatusThunkCreator,
  setUserThunkCreator,
  updateUserStatusThunkCreator,
} from '../../redux_my/profile_reducer';
import { AppStatePT } from '../../redux_my/store_redux';

import { Profile } from './Profile';

type PathParamPT = {
  userId: string;
};

export class ProfileContainerAPI extends Component<
  mapStateToPropsPT & mapDispatchToPropsType & { params: PathParamPT }
> {
  componentDidMount = (): void => {
    // eslint-disable-next-line react/destructuring-assignment
    let userID = this.props.params.userId;

    if (!userID) {
      userID = '21608';
    }

    // eslint-disable-next-line react/destructuring-assignment
    this.props.setUserThunkCreator(userID);
    // eslint-disable-next-line react/destructuring-assignment
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
  };

  render(): ReactElement {
    const { profile, status, updateUserStatusThunkCreatorESL } = this.props;

    return (
      <Profile
        profile={profile}
        status={status}
        updateUserStatusThunkCreator={updateUserStatusThunkCreatorESL}
      />
    );
  }
}

type mapStateToPropsPT = {
  profile: ProfileType;
  status: string;
};
const mapStateToProps = (state: AppStatePT): mapStateToPropsPT => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

type mapDispatchToPropsType = {
  setUserThunkCreator: (useId: string) => void;
  setUserStatusThunkCreator: (status: string) => void;
  updateUserStatusThunkCreatorESL: (status: string) => void;
};
const mapDispatchToProps: mapDispatchToPropsType = {
  setUserThunkCreator,
  setUserStatusThunkCreator,
  updateUserStatusThunkCreatorESL: updateUserStatusThunkCreator,
};

export const withRouter = (WrappedComponent: typeof Component) => (props: object) => {
  const params = useParams(); // useParams возвращает объект пары key/value (ключ/значение) параметров URL.
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <WrappedComponent {...props} params={params} />;
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
