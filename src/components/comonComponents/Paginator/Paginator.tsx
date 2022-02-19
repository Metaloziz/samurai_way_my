import { memo } from 'react';
import style from 'components/Users/Users.module.css';
import { UsersStatePT } from 'components/Users/UsersContainer';

type PaginatorType = {
  setPage: (pageID: number) => void
  totalCount: number
  pageSize: number
  currentPage: number
}

export const Paginator = memo(({
                                 totalCount,
                                 pageSize,
                                 setPage,
                                 currentPage,
                               }: PaginatorType) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let pagesCount = Math.ceil(totalCount / pageSize);

  let pages: number[] = [];

  for (let i = 1; i <= 10; i++) {  // 10 hardcore
    pages.push(i);
  }

  return <div className={style.buttons_pages}>
    {pages.map(pageID => <button key={pageID}
                                 onClick={() => setPage(pageID)}
                                 className={currentPage === pageID ? style.current : ''}>{pageID}</button>)}

  </div>;

});








