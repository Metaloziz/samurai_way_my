import { ReactElement } from 'react';

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

export const LoginForm = (): ReactElement => (
  // props: FormDataType, LoginPropsType & LoginPropsType,

  // const maxLength = useCallback(maxLengthCreator(MaxLengthSymbols.loginForm), []);

  <div>Login</div>
  // <form onSubmit={props.handleSubmit}>
  //   <div>
  //     <Field
  //       type="text"
  //       name="email"
  //       placeholder="login"
  //       component={Input}
  //       validate={[requiredField, maxLength]}
  //     />
  //   </div>
  //   <div>
  //     <Field
  //       type="password"
  //       name="password"
  //       placeholder="password"
  //       component={Input}
  //       validate={[requiredField, maxLength]}
  //     />
  //   </div>
  //   <div>
  //     <Field type="checkbox" name="remember me" component="input" /> remember me
  //   </div>
  //   <div className={style.errorMessage}>
  //     {props.error} {/* попадает сюда если сработал stopSubmit AC */}
  //   </div>
  //   <div>
  //     {props.captchaURL && (
  //       <div>
  //         <img alt="captcha" src={props.captchaURL} />
  //         <div>Captcha:</div>
  //         <div>
  //           <Field type="input" name="captcha" component="input" />
  //         </div>
  //       </div>
  //     )}
  // {/*     <button type="button">Login</button> */}
  // {/*   </div> */}
  // {/* </form> */}
);
