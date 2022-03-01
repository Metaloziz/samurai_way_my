import { ReactElement } from 'react';

import style from './Page404.module.css';

const Page404 = (): ReactElement => (
  <div className={style.dive}>
    <div>404</div>
    <div className={style.diveImg} />
    <div>Page not found!</div>
    <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
  </div>
);

export default Page404;
