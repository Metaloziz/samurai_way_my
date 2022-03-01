export {};

// import { memo } from 'react';
//
// import * as axios from 'axios';
//
// import image from './imgAva/user.png';
// import style from './Users.module.css';
//
// type UsersPT = {
//   users: UserPT[];
//   totalCount: number;
//   error: string;
// };
// type UserPT = {
//   id: number;
//   name: string;
//   status: string;
//   photos: {
//     small: string;
//     large: string;
//   };
//   followed: boolean;
// };
// type mainPT = {
//   follow: (userID: number) => void;
//   setUsers: (users: UserPT[]) => void;
// };
//
// const Users = memo((props: UsersPT & mainPT) => {
//   const callBack = (userID: number) => props.follow(Number(userID));
//
//   const setCallBack = () => {
//     axios.default
//       .get('https://social-network.samuraijs.com/api/1.0/users')
//       .then(state => {
//         props.setUsers(state.data.items);
//       });
//   };
//
//   return (
//     <div>
//       <button onClick={setCallBack}>setUsers</button>
//       {props.users.map(user => (
//         <div id={String(user.id)} key={user.id} className={style.main_div}>
//           <div>
//             <img alt="ava" src={user.photos.small || image} />
//           </div>
//           <div>{user.name}</div>
//           <div>{user.status}</div>
//           {/* <div>{user.location.country}</div> */}
//           {/* <div>{user.location.city}</div> */}
//
//           {user.followed ? 'followed' : 'unFollowed'}
//
//           <button onClick={() => callBack(user.id)}>follow</button>
//         </div>
//       ))}
//     </div>
//   );
// });
