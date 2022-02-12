import React from 'react';
import { FormDataType, LoginForm } from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { setLoginThunkCreator, setLogoutThunkCreator } from 'redux/auth_reducer';
import { loginAPIRequestType } from 'api/api';

class LoginContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {

  onSubmit = (formData: FormDataType) => {
    console.log(formData);
    this.props.setLoginThunkCreator(formData);
  };

  logout = () => {
    this.props.setLogoutThunkCreator();
  };

  render() {

    return (
      <>
        <div>
          LOGIN
        </div>
        <LoginForm onSubmit={this.onSubmit} />
        <button onClick={this.logout}>logout</button>
      </>
    );
  }
}

// <LoginForm onSubmit={onSubmit}/> так это контейнерная компонента, то в onSubmit автоматом попадают пропсы

type mapStateToPropsType = () => void

const mapStateToProps: mapStateToPropsType = () => {
  return {};
};

type mapDispatchToPropsType = {
  setLoginThunkCreator: (userData: loginAPIRequestType) => void
  setLogoutThunkCreator: () => void
}

const mapDispatchToProps: mapDispatchToPropsType = {
  setLoginThunkCreator: setLoginThunkCreator,
  setLogoutThunkCreator: setLogoutThunkCreator,
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);