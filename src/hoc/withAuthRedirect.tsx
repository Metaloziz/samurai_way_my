import React, { ReactElement } from 'react';

import { connect, ConnectedComponent } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStatePT } from '../redux_my/store_redux';

type PropsTypeFromMDTP = {
  isAuth: boolean;
};

type MapStateToPropsType = (state: AppStatePT) => PropsTypeFromMDTP;
type RedirectComponentType = (props: PropsTypeFromMDTP) => ReactElement;

const mapStateToProps: MapStateToPropsType = state => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(
  Component: React.ComponentType<T>,
): ConnectedComponent<RedirectComponentType, Omit<PropsTypeFromMDTP, 'isAuth'>> {
  //  <T> не работает со стрелочными функциями

  const RedirectComponent: RedirectComponentType = props => {
    const { isAuth, ...restProps } = props; // Достаём isAuth, т.к. нам не нужно его передавать в компоненту

    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...(restProps as T)} />; // Все что мы закинем сюда, добавит новые ключи в конечной компоненте
  };

  // let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return connect(mapStateToProps)(RedirectComponent);
}
