import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
  totalCount: number
  pageSize: number
  currentPage: number
  setPage: (pageNumber: number) => void
  portionSize: number
}

export const Paginator = ({
                            totalCount,
                            pageSize,
                            currentPage,
                            setPage,
                            portionSize,
                          }: PropsType) => {

  let pagesCount = Math.ceil(totalCount / pageSize);

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return <div className={cn(styles.paginator)}>
    {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1);
      }}>PREV</button>}

    {pages
      .filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber)
      .map((item) => {
        return <span className={cn({
          [styles.selectedPage]: currentPage === item,
        }, styles.pageNumber)}
                     key={item}
                     onClick={(e) => {
                       setPage(item);
                     }}>{item}</span>;
      })}
    {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1);
      }}>NEXT</button>}

  </div>;
};

