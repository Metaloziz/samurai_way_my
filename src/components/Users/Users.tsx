import React from 'react';
import s from './Users.module.css'

export type usersStatePT = {
    users: usersPT[]
}
export type usersPT = {
    id: number
    photo: string
    followed: boolean
    fullName: string
    status: string
    location: locationPT
}
export type locationPT = {
    city: string
    country: string
}
type mainPT = {
    follow: (userID: number) => void
}


export const Users = (props: usersStatePT & mainPT) => {

    const callBack = (userID: number) => {
        props.follow(Number(userID))
    }


    return (
        <div>
            {props.users.map((user) => {

                return <div id={String(user.id)} key={user.id} className={s.main_div}>
                    <div><img alt={'ava'} src={user.photo}/></div>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>

                    {user.followed ? 'followed' : 'unFollowed'}

                    <button onClick={() => callBack(user.id)}>follow</button>
                </div>
            })}
        </div>
    );
};








