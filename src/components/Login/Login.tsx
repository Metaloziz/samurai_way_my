import React from 'react';
import { FormDataType, LoginForm } from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { setLoginThunkCreator } from 'redux/auth_reducer';
import { loginAPIRequestType } from 'api/api';
import { AppStatePT } from 'redux/store_redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'utils/selectors/selectors';

class LoginContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {

  onSubmit = (formData: FormDataType) => {
    console.log(formData);
    this.props.setLoginThunkCreator(formData);
  };

  render() {

    if (this.props.isAuth) return <Navigate to={'/profile'} />;
    return (
      <>
        <div>
          LOGIN
        </div>
        <LoginForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

// <LoginForm onSubmit={onSubmit}/> так это контейнерная компонента, то в onSubmit автоматом попадают пропсы

type mapStateToPropsType = { isAuth: boolean }

const mapStateToProps = (state: AppStatePT): mapStateToPropsType => {
  return selectIsAuth(state);
};

type mapDispatchToPropsType = {
  setLoginThunkCreator: (userData: loginAPIRequestType) => void
}

const mapDispatchToProps: mapDispatchToPropsType = {
  setLoginThunkCreator: setLoginThunkCreator,
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);