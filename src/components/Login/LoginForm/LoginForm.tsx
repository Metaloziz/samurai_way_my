import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

// <form onSubmit={props.handleSubmit}>  метод из redux form,
// который собирает данные из Fields

const LoginReduxForm = (props: InjectedFormProps<FormDataType>) => {


    return (
        <form onSubmit={props.handleSubmit}> метод из redux form,
            <div>
                <Field type={'text'}
                       name={'login'}
                       placeholder={'login'}
                       component={'input'}/>
            </div>
            <div>
                <Field type={"password"}
                       name={'password'}
                       placeholder={"password"}
                       component={'input'}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={'remember me'}
                       component={'input'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginForm = reduxForm<FormDataType>({form: 'LOGIN'})(LoginReduxForm)