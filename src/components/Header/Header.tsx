import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {userDataPT} from "../../redux/auth_reducer";


type HeaderPT = {
    data: userDataPT
}

export const Header = ({data}: HeaderPT) => {
    return (
        <div className={s.header}>
            <div>
                <img alt={'logo'}
                     src="https://pngimage.net/wp-content/uploads/2018/05/circle-effect-png.png"/>
                <div>LOGO</div>
            </div>
            <div className={s.loginBlock}>
                {data.resultCode === 0
                    ? <div>
                        <NavLink to={'/login'}>Login</NavLink>
                        <div>{data.data.login}</div>
                    </div>
                    : 'error'}
                {/*<NavLink to={'/login'}>Login</NavLink>*/}
            </div>
        </div>
    )
}