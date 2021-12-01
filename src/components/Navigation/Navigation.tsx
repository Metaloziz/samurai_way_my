import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'
import {navBarNavLinkPropsType} from "../../redux/state";

export const Navigation = (props: navBarNavLinkPropsType) =>
    <div>
        <nav className={s.navigation}>
            {props.sidebar.map((x) =>
                <div className={s.item}>
                    <NavLink to={x.path} className={({isActive}) => isActive ? s.active : ''}> {x.title} </NavLink>
                </div>
            )
            }
        </nav>
    </div>




