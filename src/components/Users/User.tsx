import style from 'components/Users/Users.module.css';
import { NavLink } from 'react-router-dom';
import stockImage from 'components/Users/imgAva/user.png';
import { memo } from 'react';
import { UserPT } from 'components/Users/UsersContainer';
import cn from 'classnames';

type UserType = {
  user: UserPT
  followCB: (id: number, followed: boolean) => void
}

export const User = memo(({ user, followCB }: UserType) => {

  const followToggle = () => {
    followCB(user.id, user.followed);
  };

  return <div
    id={String(user.id)}
    className={cn(style.main_div, user.followed && style.main_div2)}>
    <div>
      <NavLink to={'/profile/' + user.id}>
        <img alt={'ava'} src={user.photos.small || stockImage} />
      </NavLink>
    </div>
    <div>{user.name}</div>
    <div>{user.status}</div>
    {user.followed ? <span>followed</span> : <span>unfollowed</span>}
    <button disabled={user.isFetchingUser}
            onClick={followToggle}>
      {user.followed ? 'unFollowed' : 'followed'}
    </button>
  </div>;
});