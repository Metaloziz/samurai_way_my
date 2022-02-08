import React, { ReactElement } from 'react';

import * as axios from 'axios';

import image from './imgAva/user.png';
import style from './Users.module.css';

type UsersPT = {
  users: UserPT[];
  // totalCount: number;
  // error: string;
};
type UserPT = {
  id: number;
  name: string;
  status: string;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
};
type mainPT = {
  follow: (userID: number) => void;
  setUsers: (users: UserPT[]) => void;
};

// export type usersPT = {
//     id: number
//     photo: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: locationPT
// }
// export type locationPT = {
//     city: string
//     country: string
// }

export const Users = ({ follow, setUsers, users }: UsersPT & mainPT): ReactElement => {
  const callBack = (userID: number): void => follow(Number(userID));

  const setCallBack = (): void => {
    axios.default
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(state => {
        setUsers(state.data.items);
      });
  };

  return (
    <div>
      <button type="button" onClick={setCallBack}>
        setUsers
      </button>
      {users.map(user => (
        <div id={String(user.id)} key={user.id} className={style.main_div}>
          <div>
            <img alt="ava" src={user.photos.small || image} />
          </div>
          <div>{user.name}</div>
          <div>{user.status}</div>
          {/* <div>{user.location.country}</div> */}
          {/* <div>{user.location.city}</div> */}
          {user.followed ? 'followed' : 'unFollowed'}
          <button type="button" onClick={() => callBack(user.id)}>
            follow
          </button>
        </div>
      ))}
    </div>
  );
};
