import React, { ReactElement } from 'react';

import { connect } from 'react-redux';

import { setUserDataThunkCreator } from '../../redux_my/auth_reducer';
import { AppStatePT } from '../../redux_my/store_redux';

import { Header, userDataPT } from './Header';

type mapDispatchToPropsPT = {
  setUserDataThunkCreator: () => void;
};

export class HeaderContainerAPI extends React.Component<
  userDataPT & mapDispatchToPropsPT
> {
  componentDidMount = (): void => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.setUserDataThunkCreator();
  };

  render = (): ReactElement => <Header data={this.props} />;
}

const mapStateToProps = (state: AppStatePT): userDataPT => state.auth;

export const HeaderContainer = connect(mapStateToProps, { setUserDataThunkCreator })(
  HeaderContainerAPI,
);
