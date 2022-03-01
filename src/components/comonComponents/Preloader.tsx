import { ReactElement } from 'react';

import loader from '../Users/imgAva/blak_water.gif';
import style from '../Users/Users.module.css';

export const Preloader = (): ReactElement => (
  <img className={style.loader} alt="loader" src={loader} />
);
