import { ReactElement } from 'react';

import loader from '../Users/imgAva/blak_water.gif';

import style from 'components/Users/Users.module.scss';

export const Preloader = (): ReactElement => (
  <img className={style.loader} alt="loader" src={loader} />
);
