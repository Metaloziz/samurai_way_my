import React from 'react';
import {FormDataType, LoginForm} from "./LoginForm/LoginForm";
import {loginAPIRequestType} from "../../api/api";
import {connect} from "react-redux";
import {setLoginThunkCreator} from "../../redux/auth_reducer";


class LoginContainer extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {

    componentDidMount() {

    }

    onSubmit = (formData: FormDataType) => {
        this.props.setLoginThunkCreator(formData)
    }

    render() {

        return (
            <>
                <div>
                    LOGIN
                </div>
                <LoginForm onSubmit={this.onSubmit}/>
            </>
        );
    }
}

// <LoginForm onSubmit={onSubmit}/> так это контейнерная компонента, то в onSubmit автоматом попадают пропсы


type mapStateToPropsType = () => void

const mapStateToProps: mapStateToPropsType = () => {
    return {}
}

type mapDispatchToPropsType = {
    setLoginThunkCreator: (userData: loginAPIRequestType) => void
}

const mapDispatchToProps: mapDispatchToPropsType = {
    setLoginThunkCreator: setLoginThunkCreator
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)