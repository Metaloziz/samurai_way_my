import React from 'react';
import s from './Users.module.css'
import image from '../Users/imgAva/user.png'
import {UsersPT} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersFuncPT = {
    setPage: (pageID: number) => void
    followAC: (userID: number) => void
}


export const Users = (props: UsersPT & UsersFuncPT) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages: number[] = []

    for (let i = 1; i <= 10; i++) {  // 10 hardcore
        pages.push(i)
    }

    const localCB = (id: number, followed: boolean) => {
        // props.followAC(id)
        followed
            ? axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + id,
                {
                    withCredentials: true,
                    headers: {'API-KEY': '0d359f4b-dbac-4b25-81ad-e06b681fec5c'}
                })
                .then(response => {
                        if (response.data.resultCode === 0) {
                            props.followAC(id)
                        }
                    }
                )
            : axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + id, {},
                {
                    withCredentials: true,
                    headers: {'API-KEY': '0d359f4b-dbac-4b25-81ad-e06b681fec5c'}
                })
                .then(response => {
                        if (response.data.resultCode === 0) {
                            props.followAC(id)
                        }
                    }
                )
    }

    return <div>
        <div className={s.buttons_pages}>
            {pages.map(pageID => <span key={pageID}
                                       onClick={() => props.setPage(pageID)}
                                       className={props.currentPage === pageID ? s.current : ''}>{pageID}</span>)}

        </div>
        {props.users.map((user) => <div id={String(user.id)} key={user.id} className={s.main_div}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt={'ava'} src={user.photos.small || image}/>
                    </NavLink>
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                {/*<div>{user.location.country}</div>*/}
                {/*<div>{user.location.city}</div>*/}

                {user.followed ? 'followed' : 'unFollowed'}

                <button onClick={() => localCB(user.id, user.followed)}>
                    {user.followed ? 'unFollowed' : 'followed'}
                </button>
            </div>
        )}
    </div>

}








