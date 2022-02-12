import { Header, userDataPT } from './Header';
import { connect } from 'react-redux';
import { setLogoutThunkCreator, setUserDataThunkCreator } from 'redux/auth_reducer';
import { AppStatePT } from 'redux/store_redux';
import { Component } from 'react';

type mapDispatchToPropsPT = {
  setUserDataThunkCreator: () => void
  setLogoutThunkCreator: () => void
}

export class HeaderContainerAPI extends Component<userDataPT & mapDispatchToPropsPT> {

  componentDidMount = () => {
    this.props.setUserDataThunkCreator();
  };

  render() {
    return (
      <Header data={this.props}
              setLogoutThunkCreator={this.props.setLogoutThunkCreator} />
    );
  }
}

const mapStateToProps = (state: AppStatePT): userDataPT => state.auth;

const mapDispatchToProps: mapDispatchToPropsPT = {
  setUserDataThunkCreator,
  setLogoutThunkCreator,
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI);