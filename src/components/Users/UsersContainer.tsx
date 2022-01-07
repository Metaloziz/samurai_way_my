import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {AppStatePT} from "../../redux/store_redux";
import {changePageAC, followAC, setUsersAC, toggleIsFetchingAC} from "../../redux/users_reducer";
import {Users} from "./Users";
import {Preloader} from "../comonComponents/Preloader";

export type mapDispatchToPropsPT = {
    followAC: (userID: number) => void
    setUsersAC: (users: UserPT[], totalCount: number) => void
    changePageAC: (pageID: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
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
        (async () => {             // async mean - do it one by one, and await axios
            this.props.toggleIsFetchingAC(true)

            await axios
                .get(this.url)
                .then(state => this.props.setUsersAC(state.data.items, state.data.totalCount))

            this.props.toggleIsFetchingAC(false)
        })()
    }

    setPage = (pageID: number) => {

        this.props.toggleIsFetchingAC(true)

        this.props.changePageAC(pageID)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageID}&count=${this.props.pageSize}`, {withCredentials: true})
            .then((state) => {
                this.props.setUsersAC(state.data.items, state.data.totalCount)
                this.props.toggleIsFetchingAC(false)
            })


    }

    render() {

        return <div>
            {this.props.isFetching
                ? <Preloader/>
                : <Users users={this.props.users}
                         setPage={this.setPage}
                         pageSize={this.props.pageSize}
                         totalCount={this.props.totalCount}
                         currentPage={this.props.currentPage}
                         followAC={this.props.followAC}
                         error={this.props.error}
                         isFetching={this.props.isFetching}/>}
        </div>
    }
}

const mapStateToProps = (state: AppStatePT): UsersPT => state.users

let obj = {followAC, setUsersAC, changePageAC, toggleIsFetchingAC}

export const UsersContainer = connect(mapStateToProps, obj)(UsersAPIcontainer)







