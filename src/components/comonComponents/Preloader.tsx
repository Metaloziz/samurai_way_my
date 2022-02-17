import style from '../Users/Users.module.css';
import loader from '../Users/imgAva/blak_water.gif';
import { memo } from 'react';

export const Preloader = memo(() => {
  return <img className={style.loader} alt={'loader'} src={loader} />;
});