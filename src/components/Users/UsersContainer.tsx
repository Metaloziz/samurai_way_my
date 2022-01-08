import React from "react";
import {connect} from "react-redux";
import {AppStatePT} from "../../redux/store_redux";
import {changePageAC, followAC, setUsersAC, toggleIsFetchingAC} from "../../redux/users_reducer";
import {Users} from "./Users";
import {Preloader} from "../comonComponents/Preloader";
import {setFollowAPI, setUnFollowAPI, setUserDataAPI, setUserOnPageAPI} from "../../api/api";

export type mapDispatchToPropsPT = {
    followAC: (userID: number) => void
    setUsersAC: (users: UserPT[], totalCount: number) => void
    changePageAC: (pageID: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
}
export type UsersPT = {
    items: UserPT[]
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


    componentDidMount = () => {
        (async () => {             // async mean - do it one by one, and await axios
            this.props.toggleIsFetchingAC(true)

            await setUserDataAPI(this.props.currentPage, this.props.pageSize)
                .then((state) => {
                    console.log('setUserDataAPI')
                    this.props.setUsersAC(state.items, state.totalCount)
                })

            this.props.toggleIsFetchingAC(false)
        })()
    }

    setPage = (pageID: number) => {

        this.props.toggleIsFetchingAC(true)

        this.props.changePageAC(pageID)
        setUserOnPageAPI(pageID, this.props.pageSize)
            .then((state) => {
                this.props.setUsersAC(state.items, state.totalCount)
                this.props.toggleIsFetchingAC(false)
                console.log('setUserOnPageAPI')
            })
    }

    unFollow = (userID: number) => {
        setUnFollowAPI(userID)
            .then(response => {
                    if (response.resultCode === 0) {
                        this.props.followAC(userID)
                        console.log('unFollow')
                    }
                }
            )
    }

    follow = (userID: number) => {
        setFollowAPI(userID)
            .then(response => {
                    if (response.resultCode === 0) {
                        this.props.followAC(userID)
                        console.log('Follow')
                    }
                }
            )
    }


    render() {

        return <div>
            {this.props.isFetching
                ? <Preloader/>
                : <Users items={this.props.items}
                         setPage={this.setPage}
                         unFollow={this.unFollow}
                         follow={this.follow}
                         pageSize={this.props.pageSize}
                         totalCount={this.props.totalCount}
                         currentPage={this.props.currentPage}
                    // followAC={this.props.followAC}
                         error={this.props.error}
                         isFetching={this.props.isFetching}/>}
        </div>
    }
}

const mapStateToProps = (state: AppStatePT): UsersPT => state.users

let obj = {followAC, setUsersAC, changePageAC, toggleIsFetchingAC}

export const UsersContainer = connect(mapStateToProps, obj)(UsersAPIcontainer)







