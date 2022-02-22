import { connect } from 'react-redux';
import { AppStatePT } from 'redux/store_redux';
import { Navigate } from 'react-router-dom';
import { ComponentType } from 'react';

type MapStatePT = {
  isAuth: boolean
}

let mapStateToProps = (state: AppStatePT): MapStatePT => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {  //  <T> не работает со стрелочными функциями

  let RedirectComponent = (props: MapStatePT) => {

    let { isAuth, ...restProps } = props;   // Достаём isAuth, т.к. нам не нужно его передавать в компоненту

    if (!isAuth) {
      return <Navigate to={'/login'} />;
    }
    return <Component  {...restProps as T} />; // Все что мы закинем сюда, добавит новые ключи в конечной компоненте
  };

  // let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return connect(mapStateToProps)(RedirectComponent);
}

