import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export type sidebarPT = {
  sidebarPage: Array<ItemPT>
}
export type ItemPT = {
  path: string
  title: string
}

export const Navigation = (state: sidebarPT) => {

  return (<div>
      <nav className={s.navigation}>
        {state.sidebarPage.map((x, index) =>
          <div key={index} className={s.item}>
            <NavLink to={x.path}
                     className={({ isActive }) => isActive ? s.active : ''}> {x.title} </NavLink>
          </div>,
        )}
      </nav>
    </div>
  );
};


