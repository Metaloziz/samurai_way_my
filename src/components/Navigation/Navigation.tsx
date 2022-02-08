import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

import style from './Navigation.module.css';

export type sidebarPT = {
  sidebarPage: Array<ItemPT>;
};
export type ItemPT = {
  path: string;
  title: string;
};

export const Navigation = ({ sidebarPage }: sidebarPT): ReactElement => (
  <div>
    <nav className={style.navigation}>
      {sidebarPage.map(el => (
        <div key={v1()} className={style.item}>
          <NavLink
            to={el.path}
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            {' '}
            {el.title}{' '}
          </NavLink>
        </div>
      ))}
    </nav>
  </div>
);
