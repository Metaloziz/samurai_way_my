import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'
import {StoreContext} from "../../StoreContext";

export const Navigation = () =>

    <StoreContext.Consumer>

        {(store) => {

            let state = store.getState().sidebar

            return (<div>
                    <nav className={s.navigation}>
                        {state.map((x) =>
                            <div className={s.item}>
                                <NavLink to={x.path}
                                         className={({isActive}) => isActive ? s.active : ''}> {x.title} </NavLink>
                            </div>
                        )
                        }
                    </nav>
                </div>
            )
        }}

    </StoreContext.Consumer>




