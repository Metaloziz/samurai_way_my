import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { AppStatePT, store } from 'redux/store_redux';
import { initializeTC, UserDataInitialStateType } from 'redux/app_reducer';
import App from 'App';

export const AppHoc = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>   {/* context */}
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export type MapDispatchPT = { initializeTC: () => void }

const mapDispatchToProps: MapDispatchPT = { initializeTC: initializeTC };

const mapStateToProps = (state: AppStatePT): UserDataInitialStateType => {
  return { initialized: state.app.initialized };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

