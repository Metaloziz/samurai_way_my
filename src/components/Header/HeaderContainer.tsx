import { DataHeaderType, Header } from './Header';
import { connect } from 'react-redux';
import { setLogoutThunkCreator } from 'redux/auth_reducer';
import { AppStatePT } from 'redux/store_redux';
import { Component } from 'react';

export type mapDispatchToPropsPT = {
  setLogoutThunkCreator: () => void
}

export class HeaderContainerAPI extends Component<DataHeaderType & mapDispatchToPropsPT> {

  render() {

    let { data, setLogoutThunkCreator } = this.props;
    return (
      <Header data={data}
              setLogoutThunkCreator={setLogoutThunkCreator}
      />
    );
  }
}

const mapStateToProps = (state: AppStatePT): DataHeaderType => {
  return { data: state.auth };
};

const mapDispatchToProps: mapDispatchToPropsPT = {
  setLogoutThunkCreator,
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI);