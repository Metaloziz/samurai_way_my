import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import { mapDispatchToPropsPT } from 'components/Header/HeaderContainer';

export  type userDataPT = {
  data: {
    id: number
    login: string
    email: string
  },
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
  isAuth: boolean  // it is not from API
  captchaURL: string  // it is from another API
}

export  type DataHeaderType = {
  data: userDataPT
}

export const Header = memo(({
                              data,
                              setLogoutThunkCreator,
                            }: DataHeaderType & mapDispatchToPropsPT) => {

  return (
    <div className={style.header}>
      <div>
        <img alt={'logo'}
             src='https://w7.pngwing.com/pngs/200/945/png-transparent-vitruvian-man-vinci-italian-renaissance-drawing-others-white-hand-monochrome.png' />
        <div>LOGO</div>
      </div>
      <div className={style.loginBlock}>
        {data.resultCode === 0
          ? <div>{data.data.login}
            <button onClick={setLogoutThunkCreator}>logout</button>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </div>
  );
});