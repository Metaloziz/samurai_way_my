import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Navigation, sidebarPT } from './Navigation';

import { AppStatePT } from 'redux/store_redux';

const mapStateToProps = (state: AppStatePT): sidebarPT => ({
  sidebarPage: state.sidebarPage,
});

type MapDispatchToPropsType = (dispatch: Dispatch) => {
  test: () => { type: string };
};

const mapDispatchToProps: MapDispatchToPropsType = dispatch => ({
  test: () => dispatch({ type: 'SIDE_BAR_TEST' }),
});

export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
