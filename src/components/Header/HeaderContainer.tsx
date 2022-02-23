import { DataHeaderType, Header } from './Header';
import { connect } from 'react-redux';
import { setLogoutTC } from 'redux/auth_reducer';
import { AppStatePT } from 'redux/store_redux';
import { Component } from 'react';

export type mapDispatchToPropsPT = {
  setLogoutTC: () => void
}

export class HeaderContainerAPI extends Component<DataHeaderType & mapDispatchToPropsPT> {

  render() {

    let { data, setLogoutTC } = this.props;
    return (
      <Header data={data} setLogoutTC={setLogoutTC}
      />
    );
  }
}

const mapStateToProps = (state: AppStatePT): DataHeaderType => {
  return { data: state.auth };
};

const mapDispatchToProps: mapDispatchToPropsPT = {
  setLogoutTC: setLogoutTC,
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI);