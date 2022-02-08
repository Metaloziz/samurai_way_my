import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

type HeaderPT = {
  data: userDataPT;
};

export type userDataPT = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
  isAuth: boolean;
};

export const Header = ({ data }: HeaderPT): ReactElement => {
  const ZERO = 0;
  const resultCode = data.resultCode === ZERO;

  return (
    <div className={style.header}>
      <div>
        <img
          alt="logo"
          src="https://pngimage.net/wp-content/uploads/2018/05/circle-effect-png.png"
        />
        <div>LOGO</div>
      </div>
      <div className={style.loginBlock}>
        {resultCode ? (
          <div>
            <div>{data.data.login}</div>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};
