import { memo } from 'react';
import { UsersStatePT } from './UsersContainer';
import { Paginator } from 'components/comonComponents/Paginator/Paginator';
import { User } from 'components/Users/User';

type UsersFuncPT = {
  setPage: (pageID: number) => void
  unFollow: (userID: number) => void
  follow: (userID: number) => void
}

export const Users = memo((props: UsersStatePT & UsersFuncPT) => {

  const followToggle = (id: number, followed: boolean) => {
    followed ? props.unFollow(id) : props.follow(id);
  };

  return <div>
    <Paginator currentPage={props.currentPage}
               pageSize={props.pageSize}
               setPage={props.setPage}
               totalCount={props.totalCount}
               portionSize={10}

    />
    {props.items.map((user) => {
        return (
          <User key={user.id} user={user} followCB={followToggle} />
        );
      },
    )}
  </div>;
});








