import { ComponentType, ReactElement } from 'react';

import {
  connect,
  ConnectedComponent,
  DispatchProp,
  DistributiveOmit,
  GetLibraryManagedProps,
  Shared,
} from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStatePT } from 'redux/store_redux';

type MapStatePT = {
  isAuth: boolean;
};

const mapStateToProps = (state: AppStatePT): MapStatePT => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(
  Component: ComponentType<T>,
): ConnectedComponent<
  (props: MapStatePT) => ReactElement,
  DistributiveOmit<
    GetLibraryManagedProps<(props: MapStatePT) => ReactElement>,
    keyof Shared<
      MapStatePT & DispatchProp,
      GetLibraryManagedProps<(props: MapStatePT) => ReactElement>
    >
  >
> {
  //  <T> не работает со стрелочными функциями

  const RedirectComponent = (props: MapStatePT): ReactElement => {
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
