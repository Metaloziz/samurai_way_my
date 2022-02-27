import { connect } from 'react-redux';
import { Navigation, sidebarPT } from './Navigation';
import { ActionPT, AppStatePT } from 'redux/store_redux';

const mapStateToProps = (state: AppStatePT): sidebarPT => {
  return {
    sidebarPage: state.sidebarPage,
  };
};

const mapDispatchToProps = (dispatch: (action: ActionPT) => void) => {
  return {
    test: () => dispatch({ type: 'SIDE_BAR_TEST' }),
  };
};

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);
  





