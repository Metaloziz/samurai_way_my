import React, { ReactElement } from 'react';

import { connect } from 'react-redux';

import { loginAPIRequestType } from '../../api/api';
import { setLoginThunkCreator } from '../../redux_my/auth_reducer';

import { FormDataType, LoginForm } from './LoginForm/LoginForm';

class LoginContainer extends React.Component<
  mapStateToPropsType & mapDispatchToPropsType
> {
  onSubmit = (formData: FormDataType): void => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.setLoginThunkCreator(formData);
  };

  render = (): ReactElement => (
    <>
      <div>LOGIN</div>
      <LoginForm onSubmit={this.onSubmit} />
    </>
  );
}

// <LoginForm onSubmit={onSubmit}/> так это контейнерная компонента, то в onSubmit автоматом попадают пропсы

type mapStateToPropsType = () => void;

const mapStateToProps: mapStateToPropsType = () => ({});

type mapDispatchToPropsType = {
  setLoginThunkCreator: (userData: loginAPIRequestType) => void;
};

const mapDispatchToProps: mapDispatchToPropsType = {
  setLoginThunkCreator,
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
