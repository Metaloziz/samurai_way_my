import React from 'react';
import {connect} from "react-redux";
import {AppStatePT} from "../redux/store_redux";
import {Navigate} from "react-router-dom";


type mapStateToPropsType = {
    isAuth: boolean
}


let mapStateToProps = (state: AppStatePT): mapStateToPropsType => {

    return {
        isAuth: state.auth.isAuth
    }

}


export function withAuthRedirect<T>(Component: React.ComponentType<T>) {  //  <T> не работает со стрелочными функциями

    let RedirectComponent = (props: mapStateToPropsType) => {

        let {isAuth, ...restProps} = props   // Достаём isAuth, т.к. нам не нужно его передавать в компоненту

        if (!isAuth) {

            return <Navigate to={'/login'}/>
        }
        return <Component  {...restProps as T}/> // Все что мы закинем сюда, добавит новые ключи в конечной компоненте
    }

    // let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connect(mapStateToProps)(RedirectComponent)
}

