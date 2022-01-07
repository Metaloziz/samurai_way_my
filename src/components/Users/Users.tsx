import React from 'react';
import s from './Users.module.css'
import image from '../Users/imgAva/user.png'
import {UsersPT} from "./UsersContainer";
import {NavLink} from "react-router-dom";


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

    return <div>
        <div className={s.buttons_pages}>
            {pages.map(pageID => <span key={pageID}
                                       onClick={() => props.setPage(pageID)}
                                       className={props.currentPage === pageID ? s.current : ''}>{pageID}</span>)}

        </div>
        {props.users.map((user) => {

            return <div id={String(user.id)} key={user.id} className={s.main_div}>
                <div>
                    <NavLink to={'/profile/' + user.id}><img alt={'ava'} src={user.photos.small || image}/></NavLink>
                </div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                {/*<div>{user.location.country}</div>*/}
                {/*<div>{user.location.city}</div>*/}

                {user.followed ? 'followed' : 'unFollowed'}

                <button onClick={() => props.followAC(user.id)}>follow</button>
            </div>
        })}
    </div>

}








