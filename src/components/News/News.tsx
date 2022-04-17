import { ReactElement } from 'react';

import style from 'components/News/News.module.scss';

const News = (): ReactElement => (
  <div className={style.header}>
    <h1>News</h1>
  </div>
);
export default News;
