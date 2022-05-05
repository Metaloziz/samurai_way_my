import { FC, memo, ReactElement } from 'react';

import { Buttons } from './Buttons';
import style from './Pagination.module.scss';

export type PaginationPropsType = {
  currentPage: number;
  pagesCount: number;
  countDecksOnPage: number[];
  totalCount: number;
  setCurrentPage: (pageNumber: number) => void;
};

export const Pagination: FC<PaginationPropsType> = memo(
  ({ currentPage, pagesCount, setCurrentPage, totalCount }): ReactElement => (
    <div className={style.mainBlock}>
      <Buttons
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pagesCount={pagesCount}
        totalCount={totalCount}
      />
    </div>
  ),
);
