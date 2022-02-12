import React, { useCallback } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: boolean
}

// <form onSubmit={props.handleSubmit}>  метод из redux form,
// который собирает данные из Fields

const LoginReduxForm = (props: InjectedFormProps<FormDataType>) => {

  let maxLength = useCallback(maxLengthCreator(30), []);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type={'text'}
               name={'email'}
               placeholder={'login'}
               component={Input}
               validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <Field type={'password'}
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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginForm = reduxForm<FormDataType>({ form: 'LOGIN' })(LoginReduxForm);