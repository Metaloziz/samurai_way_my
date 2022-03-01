import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

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
          src="https://w7.pngwing.com/pngs/200/945/png-transparent-vitruvian-man-vinci-italian-renaissance-drawing-others-white-hand-monochrome.png"
        />
        <div>LOGO</div>
      </div>
      <div className={style.loginBlock}>
        {data.resultCode === CommonConstants.zero ? (
          <div>
            {data.data.login}
            <Button title="logout" onClickHandler={setLogoutHandle} />
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  ),
);
