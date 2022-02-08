import { ReactElement } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: boolean;
};

const LoginReduxForm = ({
  handleSubmit,
}: InjectedFormProps<FormDataType>): ReactElement => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field type="text" name="email" placeholder="login" component="input" />
    </div>
    <div>
      <Field type="password" name="password" placeholder="password" component="input" />
    </div>
    <div>
      <Field type="checkbox" name="remember me" component="input" /> remember me
    </div>
    <div>
      <button type="button">Login</button>
    </div>
  </form>
);

export const LoginForm = reduxForm<FormDataType>({ form: 'LOGIN' })(LoginReduxForm);
