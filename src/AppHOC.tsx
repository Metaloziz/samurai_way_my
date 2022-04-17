import { ReactElement } from 'react';

import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import { initializeTC, UserDataInitialStateType } from 'redux/app_reducer';
import { AppStatePT, store } from 'redux/store_redux';

export type MapDispatchPT = { initializeTC: () => void };

const mapDispatchToProps: MapDispatchPT = { initializeTC };

const mapStateToProps = (state: AppStatePT): UserDataInitialStateType => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export const AppHoc = (): ReactElement => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      {' '}
      <AppContainer />
    </Provider>
  </BrowserRouter>
);
