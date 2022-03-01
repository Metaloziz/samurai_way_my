import { FC, ReactElement } from 'react';

import { connect } from 'react-redux';

import { DataHeaderType, Header } from './Header';

import { setLogoutTC } from 'redux/auth_reducer';
import { AppStatePT } from 'redux/store_redux';

export type mapDispatchToPropsPT = {
  setLogoutHandle: () => void;
};

export const HeaderContainerAPI: FC<DataHeaderType & mapDispatchToPropsPT> = ({
  setLogoutHandle,
  data,
}): ReactElement => <Header data={data} setLogoutHandle={setLogoutHandle} />;

const mapStateToProps = (state: AppStatePT): DataHeaderType => ({ data: state.auth });

const mapDispatchToProps: mapDispatchToPropsPT = {
  setLogoutHandle: setLogoutTC,
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainerAPI);
