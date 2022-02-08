import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppStatePT } from '../../redux_my/store_redux';

import { Navigation, sidebarPT } from './Navigation';

const mapStateToProps = (state: AppStatePT): sidebarPT => ({
  sidebarPage: state.sidebarPage,
});

type mapDispatchToPropsType = (dispatch: Dispatch) => {
  test: () => void;
};

const mapDispatchToProps: mapDispatchToPropsType = dispatch => ({
  test: () => dispatch({ type: 'SIDE_BAR_TEST' }),
});

export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
