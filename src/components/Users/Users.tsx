import React from 'react';
import s from './Users.module.css'
import image from '../Users/imgAva/user.png'
import {UsersPT} from "./UsersAPIcontainer";


type UsersFuncPT = {
    setPage: (pageID: number) => void
    follow: (userID: number) => void
}


export const Users = (props: UsersPT & UsersFuncPT) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages: number[] = []

    for (let i = 1; i <= 10; i++) {  // 10 hardcore
        pages.push(i)
    }

    debugger
    return <div>
        <div className={s.buttons_pages}>
            {pages.map(pageID => <span onClick={() => props.setPage(pageID)}
                                       className={props.currentPage === pageID ? s.current : ''}>{pageID}</span>)}
            {/*<span style={{fontSize: "40px"}}>1</span>*/}

        </div>
        {props.users.map((user) => {

            return <div id={String(user.id)} key={user.id} className={s.main_div}>
                <div><img alt={'ava'} src={user.photos.small || image}/></div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                {/*<div>{user.location.country}</div>*/}
                {/*<div>{user.location.city}</div>*/}

                {user.followed ? 'followed' : 'unFollowed'}

                <button onClick={() => props.follow(user.id)}>follow</button>
            </div>
        })}
    </div>

}








