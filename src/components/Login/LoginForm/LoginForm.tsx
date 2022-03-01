import { memo, useCallback } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import style from './LoginForm.module.css';

import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { MaxLengthSymbols } from 'utils/enum/enum';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captchaURL: string;
};

export type LoginPropsType = {
  captchaURL: string;
};

// <form onSubmit={props.handleSubmit}>  метод из redux form,
// который собирает данные из Fields

const LoginReduxForm = memo(
  (props: InjectedFormProps<FormDataType, LoginPropsType> & LoginPropsType) => {
    const maxLength = useCallback(maxLengthCreator(MaxLengthSymbols.loginForm), []);

    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            type="text"
            name="email"
            placeholder="login"
            component={Input}
            validate={[requiredField, maxLength]}
          />
        </div>
        <div>
          <Field
            type="password"
            name="password"
            placeholder="password"
            component={Input}
            validate={[requiredField, maxLength]}
          />
        </div>
        <div>
          <Field type="checkbox" name="remember me" component="input" /> remember me
        </div>
        <div className={style.errorMessage}>
          {props.error} {/* попадает сюда если сработал stopSubmit AC */}
        </div>
        <div>
          {props.captchaURL && (
            <div>
              <img alt="captcha" src={props.captchaURL} />
              <div>Captcha:</div>
              <div>
                <Field type="input" name="captcha" component="input" />
              </div>
            </div>
          )}
          <button type="button">Login</button>
        </div>
      </form>
    );
  },
);

export const LoginForm = reduxForm<FormDataType, LoginPropsType>({ form: 'LOGIN' })(
  LoginReduxForm,
);
