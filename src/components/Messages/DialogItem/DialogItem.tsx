import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';

import style from './DialogItem.module.css';

export type DialogPT = {
  id: number;
  name: string;
  ava: string;
};

export const DialogItem = memo((props: DialogPT) => (
  <div className={style.dialog}>
    <img alt="ava" src={props.ava} title={props.name} id={props.id.toString()} />
    <NavLink className={style.navLink} to={`/messages/${props.id}`}>
      {' '}
      {props.name}{' '}
    </NavLink>
  </div>
));
