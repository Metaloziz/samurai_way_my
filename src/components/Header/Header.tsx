import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

import { Button } from 'components/comonComponents/Button/Button';
import { mapDispatchToPropsPT } from 'components/Header/HeaderContainer';
import { CommonConstants } from 'utils/enum/enum';

export type userDataPT = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
  isAuth: boolean; // it is not from API
  captchaURL: string; // it is from another API
};

export type DataHeaderType = {
  data: userDataPT;
};

export const Header = memo(
  ({ data, setLogoutHandle }: DataHeaderType & mapDispatchToPropsPT) => (
    <div className={style.header}>
      <div>
        <img
          alt="logo"
          src="https://64.media.tumblr.com/dcf321432c1bcf3f4479d08c03660c00/cd7d9d5495f29449-d5/s540x810/2a272be1ceefb67c220bcbc378a6afe9d2507732.pnj"
        />
      </div>
      <div className={style.loginBlock}>
        {data.resultCode === CommonConstants.zero ? (
          <div className={style.name}>
            <div>{data.data.login}</div>
            <Button name="logout" onClick={setLogoutHandle} />
          </div>
        ) : (
          <NavLink to="/login">
            <Button name="login" />
          </NavLink>
        )}
      </div>
    </div>
  ),
);
