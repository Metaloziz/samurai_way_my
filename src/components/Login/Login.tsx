import React from 'react';
import {LoginForm} from "./LoginForm/LoginForm";


export const Login = () => {


    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    // <LoginForm onSubmit={onSubmit}/> так это контейнерная компонента, то в onSubmit автоматом попадают пропсы

    return (
        <>
            <div>
                LOGIN
            </div>
            <LoginForm onSubmit={onSubmit}/>
        </>
    );
};


