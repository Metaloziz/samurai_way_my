import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Navigation.module.scss';

import { Button } from 'components/comonComponents/Button/Button';

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
          <NavLink to={item.path}>
            <Button name={item.title} />
          </NavLink>
        </div>
      ))}
    </nav>
  </div>
));
