import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPT = {
  data: userDataPT
}

export  type userDataPT = {
  data: {
    id: number
    login: string
    email: string
  },
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
  isAuth: boolean
}

export const Header = ({ data }: HeaderPT) => {

  // debugger

  return (
    <div className={style.header}>
      <div>
        <img alt={'logo'}
             src='https://w7.pngwing.com/pngs/200/945/png-transparent-vitruvian-man-vinci-italian-renaissance-drawing-others-white-hand-monochrome.png' />
        <div>LOGO</div>
      </div>
      <div className={style.loginBlock}>
        {data.resultCode === 0
          ? <div>

            <div>{data.data.login}</div>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}
        {/*<NavLink to={'/login'}>Login</NavLink>*/}
      </div>
    </div>
  );
};