import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import image from './imgAva/user.png';
import style from './Users.module.css';
import { UsersStatePT } from './UsersContainer';

type UsersFuncPT = {
  setPage: (pageID: number) => void;
  unFollow: (userID: number) => void;
  follow: (userID: number) => void;
};

export const Users = ({
  totalCount,
  pageSize,
  unFollow,
  follow,
  setPage,
  currentPage,
  items,
}: UsersStatePT & UsersFuncPT): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pagesCount = Math.ceil(totalCount / pageSize);

  const pages: number[] = [];
  const PAGE = 10;
  const ONE = 1;

  for (let i = 1; i <= PAGE; i += ONE) {
    // 10 hardcore
    pages.push(i);
  }

  const changeFollowingCB = (id: number, followed: boolean): void => {
    // eslint-disable-next-line no-unused-expressions
    followed ? unFollow(id) : follow(id);
  };

  // const spanRefLink = React.createRef<HTMLSpanElement>();

  // const callback = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
  //   setPage(e.currentTarge);
  // };

  return (
    <div>
      <div className={style.buttons_pages}>
        {pages.map(pageID => (
          <button
            type="button"
            id={pageID.toString()}
            key={pageID}
            onClick={() => setPage(pageID)}
            className={currentPage === pageID ? style.current : ''}
          >
            {pageID}
          </button>
        ))}
      </div>
      {items.map(user => (
        <div id={String(user.id)} key={user.id} className={style.main_div}>
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img alt="ava" src={user.photos.small || image} />
            </NavLink>
          </div>
          <div>{user.name}</div>
          <div>{user.status}</div>
          {user.followed ? 'followed' : 'unFollowed'}
          <button
            type="button"
            disabled={user.isFetchingUser}
            onClick={() => changeFollowingCB(user.id, user.followed)}
          >
            {user.followed ? 'unFollowed' : 'followed'}
          </button>
        </div>
      ))}
    </div>
  );
};
