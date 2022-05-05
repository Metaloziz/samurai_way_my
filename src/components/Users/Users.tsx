/* eslint-disable */
import { memo } from 'react';

import { UsersStatePT } from './UsersContainer';

import { Pagination } from 'components/Pagination';
import { User } from 'components/Users/User';

type UsersFuncPT = {
  setPage: (pageID: number) => void;
  unFollow: (userID: number) => void;
  follow: (userID: number) => void;
};

export const Users = memo((props: UsersStatePT & UsersFuncPT) => {
  const followToggle = (id: number, isFollow: boolean): void => {
    if (isFollow) {
      props.unFollow(id);
    } else {
      props.follow(id);
    }
  };

  return (
    <div>
      <Pagination
        currentPage={props.currentPage}
        pagesCount={props.pageSize}
        setCurrentPage={props.setPage}
        totalCount={props.totalCount}
        countDecksOnPage={[10]}
      />
      {props.items.map(user => (
        <User key={user.id} user={user} followCB={followToggle} />
      ))}
    </div>
  );
});
