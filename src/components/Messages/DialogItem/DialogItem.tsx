import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './DialogItem.module.css';

export type DialogPT = {
  id: number;
  name: string;
  ava: string;
};

export const DialogItem = ({ ava, name, id }: DialogPT): ReactElement => (
  <div className={style.dialog}>
    <img alt="ava" src={ava} title={name} id={id.toString()} />
    <NavLink className={style.navLink} to={`/messages/${id}`}>
      {' '}
      {name}{' '}
    </NavLink>
  </div>
);
