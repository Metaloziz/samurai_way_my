import { FC, ReactElement } from 'react';

import { Formik, Form, Field } from 'formik';

import { CommonConstants } from '../../../utils/enum/enum';

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

export const LoginForm: FC<LoginFormPropsType> = ({
  setLoginHandler,
  captchaURL,
}): ReactElement => {
  const validateEmail = (value: string): string | undefined => {
    console.log(captchaURL);
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validatePassword = (value: string): string | undefined => {
    let error;
    if (value.length > CommonConstants.two) {
      error = 'Nice try!';
    }
    return error;
  };

  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //     rememberMe: true,
  //     captchaURL: '',
  //   },
  //   onSubmit: values => {
  //     console.log(values);
  //     setLoginHandler(values);
  //   },
  // });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: true,
          captchaURL: '',
        }}
        onSubmit={values => {
          console.log(values);
          setLoginHandler(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <form>
              <Field name="email" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <Field name="password" validate={validatePassword} />
              {errors && touched.password && <div>{errors}</div>}
              {/* <div> */}
              {/*  <input */}
              {/*    name="checkbox" */}
              {/*    type="checkbox" */}
              {/*    onChange={formik.handleChange} */}
              {/*    defaultChecked={formik.values.rememberMe} */}
              {/*  /> */}
              {/* </div> */}

              {/* {captchaURL && ( */}
              {/*  <div> */}
              {/*    <img alt="captcha" src={captchaURL} /> */}
              {/*    <div> */}
              {/*      <input */}
              {/*        name="captchaURL" */}
              {/*        type="text" */}
              {/*        onChange={formik.handleChange} */}
              {/*        value={formik.values.captchaURL} */}
              {/*      /> */}
              {/*    </div> */}
              {/*  </div> */}
              {/* )} */}
              <button type="submit">Login</button>
            </form>
          </Form>
        )}
      </Formik>
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
