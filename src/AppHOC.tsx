import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { AppStatePT, store } from 'redux/store_redux';
import { initializeThunkCreator, userDataInitialStateType } from 'redux/app_reducer';
import App from 'App';

export const AppHoc = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <NewApp />
      </Provider>
    </BrowserRouter>
  );
};

export type mapDispatchToPropsPT = { initializeThunkCreator: () => void }

const mapDispatchToProps: mapDispatchToPropsPT = { initializeThunkCreator };

type mapStateToPropsType = (state: AppStatePT) => userDataInitialStateType

const mapStateToProps: mapStateToPropsType = (state) => {
    return {
      initialized: state.app.initialized,
    };
  }
;

const NewApp = connect(mapStateToProps, mapDispatchToProps)(App);

