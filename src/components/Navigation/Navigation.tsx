import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

export type sidebarPT = {
  sidebarPage: ItemPT[]
}
export type ItemPT = {
  path: string
  title: string
}

export const Navigation = memo(({ sidebarPage }: sidebarPT) => {

  return (<div>
      <nav className={style.navigation}>
        {sidebarPage.map((x, index) =>
          <div key={index} className={style.item}>
            <NavLink to={x.path}
                     className={({ isActive }) => isActive ? style.active : ''}> {x.title} </NavLink>
          </div>,
        )}
      </nav>
    </div>
  );
});


