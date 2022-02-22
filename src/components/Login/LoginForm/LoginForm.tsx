import { memo, useCallback } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';
import style from './LoginForm.module.css';

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captchaURL: string
}

export type LoginPropsType = {
  captchaURL: string
}

// <form onSubmit={props.handleSubmit}>  метод из redux form,
// который собирает данные из Fields

const LoginReduxForm = memo((props: InjectedFormProps<FormDataType, LoginPropsType> & LoginPropsType) => {

  let maxLength = useCallback(maxLengthCreator(30), []);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type='text'
               name={'email'}
               placeholder={'login'}
               component={Input}
               validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <Field type='password'
               name={'password'}
               placeholder={'password'}
               component={Input}
               validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <Field type={'checkbox'}
               name={'remember me'}
               component={'input'} /> remember me
      </div>
      <div className={style.errorMessage}>
        {props.error} {/* попадает сюда если сработал stopSubmit AC*/}
      </div>
      <div>
        {props.captchaURL && <div>
          <img alt={'captcha'} src={props.captchaURL} />
          <div>Captcha:</div>
          <div><Field type={'input'}
                      name={'captcha'}
                      component={'input'} /></div>
        </div>}
        <button>Login</button>
      </div>
    </form>
  );
});

export const LoginForm = reduxForm<FormDataType, LoginPropsType>({ form: 'LOGIN' })(LoginReduxForm);