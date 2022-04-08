import { FC, ReactElement } from 'react';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LoginForm } from './LoginForm/LoginForm';

import { loginAPIRequestType } from 'api/api';
import { setLoginTC } from 'redux/auth_reducer';
import { AppStatePT } from 'redux/store_redux';
import { selectCaptcha, selectIsAuth } from 'utils/selectors/selectors';

const LoginContainer: FC<mapDispatchToPropsType & mapStateToPropsType> = ({
  setLoginHandler,
  isAuth,
  captchaURL,
}): ReactElement => {
  if (isAuth) return <Navigate to="/profile" />;
  return (
    <div>
      <div>LOGIN</div>
      <div>Email: free@samuraijs.com</div>
      <div>Password: free</div>
      <LoginForm setLoginHandler={setLoginHandler} captchaURL={captchaURL} />
    </div>
  );
};
// <LoginForm onSubmit={onSubmit}/> так это контейнерная компонента, то в onSubmit автоматом попадают пропсы

type mapStateToPropsType = { isAuth: boolean; captchaURL: string };

const mapStateToProps = (state: AppStatePT): mapStateToPropsType => ({
  ...selectIsAuth(state),
  ...selectCaptcha(state),
});

type mapDispatchToPropsType = {
  setLoginHandler: (userData: loginAPIRequestType) => void;
};

const mapDispatchToProps: mapDispatchToPropsType = {
  setLoginHandler: setLoginTC,
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default Login;
