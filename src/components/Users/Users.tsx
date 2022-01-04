import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import image from '../Users/imgAva/user.png'

export type UsersPT = {
    users: UserPT[]
    totalCount: number
    error: string
}
export type UserPT = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
export type mainPT = {
    follow: (userID: number) => void
    setUsers: (users: UserPT[]) => void
}


export class Users extends React.Component<UsersPT & mainPT> {

    setCallBack = () => {
        axios.default
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(state => this.props.setUsers(state.data.items))
    }

    render() {
        return <div>
            <button onClick={this.setCallBack}>setUsers</button>
            {this.props.users.map((user) => {

                return <div id={String(user.id)} key={user.id} className={s.main_div}>
                    <div><img alt={'ava'} src={user.photos.small || image}/></div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    {/*<div>{user.location.country}</div>*/}
                    {/*<div>{user.location.city}</div>*/}

                    {user.followed ? 'followed' : 'unFollowed'}

                    <button onClick={() => this.props.follow(user.id)}>follow</button>
                </div>
            })}
        </div>

    }
}








