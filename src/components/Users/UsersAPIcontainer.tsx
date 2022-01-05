import React from 'react';
import * as axios from "axios";
import {mapDispatchToPropsPT} from "./UsersContainer";
import {Users} from "./Users";

export type UsersPT = {
    users: UserPT[]
    pageSize: number
    totalCount: number
    error: string
    currentPage: number

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


    componentDidMount() {
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(state => this.props.setUsers(state.data.items, state.data.totalCount))
    }

    setPage(pageID: number) {
        this.props.changePage(pageID)
        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageID}&count=${this.props.pageSize}`)
            .then(state => this.props.setUsers(state.data.items, state.data.totalCount))
    }

    render() {


        return <Users users={this.props.users}
                      setPage={this.setPage}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      error={this.props.error}
        />

    }
}








