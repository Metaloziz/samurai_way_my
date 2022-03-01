import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css';

export type sidebarPT = {
  sidebarPage: ItemPT[];
};
export type ItemPT = {
  path: string;
  title: string;
};

export const Navigation = memo(({ sidebarPage }: sidebarPT) => (
  <div>
    <nav className={style.navigation}>
      {sidebarPage.map(item => (
        <div key={item.path} className={style.item}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            {' '}
            {item.title}{' '}
          </NavLink>
        </div>
      ))}
    </nav>
  </div>
));
