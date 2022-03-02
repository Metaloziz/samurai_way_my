import { FC, ReactElement } from 'react';

import { useFormik } from 'formik';

import { loginAPIRequestType } from 'api/api';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captchaURL: string;
};

export type LoginFormPropsType = {
  setLoginHandler: (userData: loginAPIRequestType) => void;
  captchaURL: string;
};

// <form onSubmit={props.handleSubmit}>  метод из redux form,
// который собирает данные из Fields

export const LoginForm: FC<LoginFormPropsType> = ({
  setLoginHandler,
  captchaURL,
}): ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: true,
      captchaURL: '',
    },
    onSubmit: values => {
      console.log(values);
      // console.log(captchaURL);
      setLoginHandler(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            // autoComplete={formik.values.email}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <input
          id="password"
          name="password"
          type="password"
          // autoComplete={formik.values.password}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div>
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            onChange={formik.handleChange}
            defaultChecked={formik.values.rememberMe}
          />
        </div>

        {captchaURL && (
          <div>
            <img alt="captcha" src={captchaURL} />
            <div>
              <input
                id="captchaURL"
                name="captchaURL"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.captchaURL}
              />
            </div>
          </div>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// {/* {props.captchaURL && ( */}
// {/*   <div> */}
// {/*     <img alt="captcha" src={props.captchaURL} /> */}
// {/*     <div>Captcha:</div> */}
// {/*     <div> */}
// {/*       <Field type="input" name="captcha" component="input" /> */}
// {/*     </div> */}
// {/*   </div> */}
// {/* )} */}
// {/* <input */}
// {/*   id="captcha" */}
// {/*   name="captcha" */}
// {/*   type="text" */}
// {/*   onChange={formik.handleChange} */}
// {/*   value={formik.values.captchaURL} */}
// {/*   // value={formik.values.rememberMe} */}
// {/* /> */}

// props: FormDataType, LoginPropsType & LoginPropsType,

// const maxLength = useCallback(maxLengthCreator(MaxLengthSymbols.loginForm), []);
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
