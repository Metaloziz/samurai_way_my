import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'

import {statePT} from "../../redux/store";
import {StoreContext} from "../../StoreContext/StoreContext";

export const Navigation = () =>

    <StoreContext.Consumer>

        {(store) => {

            let state: statePT = store.getState()

            return (<div>
                    <nav className={s.navigation}>
                        {state.sidebar.map((x) =>
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




