import {AppStateType} from "../../redux/store_redux";
import {changePageAC, followAC, setUsersAC, toggleIsFetchingAC} from "../../redux/users_reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import React from "react";
import * as axios from "axios";
import {Users} from "./Users";
import loader from './imgAva/blak_water.gif'
import s from './Users.module.css'

export type mapDispatchToPropsPT = {
    follow: (userID: number) => void
    setUsers: (users: UserPT[], totalCount: number) => void
    changePage: (pageID: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPT = {
    users: UserPT[]
    pageSize: number
    totalCount: number
    error: string
    currentPage: number
    isFetching: boolean

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

export class UsersAPIcontainer extends React.Component<UsersPT & mapDispatchToPropsPT> {

    url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`

    componentDidMount() {
        (async () => {
            this.props.toggleIsFetching(true)

            await axios.default
                .get(this.url)
                .then((state) => {
                    this.props.setUsers(state.data.items, state.data.totalCount)
                })

            this.props.toggleIsFetching(false)
        })()


    }

    setPage = (pageID: number) => {

        this.props.toggleIsFetching(true)

        this.props.changePage(pageID)
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageID}&count=${this.props.pageSize}`)
            .then((state) => {
                this.props.setUsers(state.data.items, state.data.totalCount)
                this.props.toggleIsFetching(false)
            })


    }

    render() {

        return <div>
            {this.props.isFetching
                ? <img className={s.loader} alt={'loader'} src={loader}/>
                : <Users users={this.props.users}
                         setPage={this.setPage}
                         pageSize={this.props.pageSize}
                         totalCount={this.props.totalCount}
                         currentPage={this.props.currentPage}
                         follow={this.props.follow}
                         error={this.props.error}
                         isFetching={this.props.isFetching}/>}
        </div>
    }
}

const mapStateToProps = (state: AppStateType): UsersPT => state.users

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPT => {

    return {
        follow: (userID) => dispatch(followAC(userID)),
        setUsers: (users, totalCount) => dispatch(setUsersAC(users, totalCount)),
        changePage: (pageID) => dispatch(changePageAC(pageID)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIcontainer)







