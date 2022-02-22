import { FormDataType, LoginForm } from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { setLoginThunkCreator } from 'redux/auth_reducer';
import { loginAPIRequestType } from 'api/api';
import { AppStatePT } from 'redux/store_redux';
import { Navigate } from 'react-router-dom';
import { selectCaptcha, selectIsAuth } from 'utils/selectors/selectors';
import { Component } from 'react';

class LoginContainer extends Component<mapStateToPropsType & mapDispatchToPropsType> {

  onSubmit = (formData: FormDataType) => {
    this.props.setLoginThunkCreator(formData);

  };

  render() {

    if (this.props.isAuth) return <Navigate to={'/profile'} />;
    return (
      <>
        <div>
          LOGIN
        </div>
        <div>Email: free@samuraijs.com</div>
        <div>Password: free</div>
        <LoginForm onSubmit={this.onSubmit} captchaURL={this.props.captchaURL} />
      </>
    );
  }
}

// <LoginForm onSubmit={onSubmit}/> так это контейнерная компонента, то в onSubmit автоматом попадают пропсы

type mapStateToPropsType = { isAuth: boolean, captchaURL: string }

const mapStateToProps = (state: AppStatePT): mapStateToPropsType => {
  return { ...selectIsAuth(state), ...selectCaptcha(state) };
};

type mapDispatchToPropsType = {
  setLoginThunkCreator: (userData: loginAPIRequestType) => void
}

const mapDispatchToProps: mapDispatchToPropsType = {
  setLoginThunkCreator: setLoginThunkCreator,
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default Login;