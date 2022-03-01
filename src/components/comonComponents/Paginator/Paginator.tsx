import React, { FC, ReactElement, useState } from 'react';

import cn from 'classnames';

import styles from './Paginator.module.css';

import { CommonConstants } from 'utils/enum/enum';

type PaginatorPropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  setPage: (pageNumber: number) => void;
  portionSize: number;
};

export const Paginator: FC<PaginatorPropsType> = ({
  totalCount,
  pageSize,
  currentPage,
  setPage,
  portionSize,
}): ReactElement => {
  const pagesCount = Math.ceil(totalCount / pageSize);

  const pages: Array<number> = [];
  for (let i = CommonConstants.one; i <= pagesCount; i += CommonConstants.one) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(CommonConstants.one);

  const leftPortionPageNumber =
    (portionNumber - CommonConstants.one) * portionSize + CommonConstants.one;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={cn(styles.paginator)}>
      {portionNumber > CommonConstants.one && (
        <button
          type="button"
          onClick={() => {
            setPortionNumber(portionNumber - CommonConstants.one);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber)
        .map(item => (
          <button
            type="button"
            className={cn(
              {
                [styles.selectedPage]: currentPage === item,
              },
              styles.pageNumber,
            )}
            key={item}
            onClick={e => {
              // eslint-disable-next-line no-console
              console.log(e);
              setPage(item);
            }}
          >
            {item}
          </button>
        ))}
      {portionCount > portionNumber && (
        <button
          type="button"
          onClick={() => {
            setPortionNumber(portionNumber + CommonConstants.one);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
