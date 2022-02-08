import { ReactElement } from 'react';

import style from './News.module.css';

export const News = (): ReactElement => (
  <div className={style.header}>
    <h1>News</h1>
  </div>
);
