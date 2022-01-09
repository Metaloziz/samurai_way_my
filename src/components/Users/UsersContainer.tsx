import React from "react";
import {connect} from "react-redux";
import {AppStatePT} from "../../redux/store_redux";
import {
    changePageAC,
    followAC,
    setUsersAC,
    toggleIsFetchingPageAC,
    toggleIsFetchingUserAC
} from "../../redux/users_reducer";
import {Users} from "./Users";
import {Preloader} from "../comonComponents/Preloader";
import {setFollowAPI, setUnFollowAPI, setUserDataAPI, setUserOnPageAPI} from "../../api/api";

export type mapDispatchToPropsPT = {
    followAC: (userID: number) => void
    setUsersAC: (users: UserPT[], totalCount: number) => void
    changePageAC: (pageID: number) => void
    toggleIsFetchingPageAC: (isFetching: boolean) => void
    toggleIsFetchingUserAC: (isFetching: boolean, userID: number) => void
}
export type UsersPT = {
    items: UserPT[]
    pageSize: number
    totalCount: number
    error: string
    currentPage: number
    isFetchingPage: boolean
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
    isFetchingUser: boolean
}


export class UsersAPIcontainer extends React.Component<UsersPT & mapDispatchToPropsPT> {


    componentDidMount = () => {
        (async () => {             // async mean - do it one by one, and await axios
            this.props.toggleIsFetchingPageAC(true)

            await setUserDataAPI(this.props.currentPage, this.props.pageSize)
                .then((state) => {
                    console.log('setUserDataAPI')

                    this.props.setUsersAC(state.items, state.totalCount)
                })

            this.props.toggleIsFetchingPageAC(false)
        })()
    }

    setPage = (pageID: number) => {

        this.props.toggleIsFetchingPageAC(true)

        this.props.changePageAC(pageID)
        setUserOnPageAPI(pageID, this.props.pageSize)
            .then((state) => {
                this.props.setUsersAC(state.items, state.totalCount)
                this.props.toggleIsFetchingPageAC(false)
                console.log('setUserOnPageAPI')
            })
    }

    unFollow = (userID: number) => {

        this.props.toggleIsFetchingUserAC(true, userID)
        setUnFollowAPI(userID)
            .then(response => {
                    if (response.resultCode === 0) {
                        this.props.followAC(userID)
                        this.props.toggleIsFetchingUserAC(false, userID)
                        console.log('unFollow')
                    }
                }
            )
    }

    follow = (userID: number) => {
        this.props.toggleIsFetchingUserAC(true, userID)
        setFollowAPI(userID)
            .then(response => {
                    if (response.resultCode === 0) {
                        this.props.followAC(userID)
                        this.props.toggleIsFetchingUserAC(false, userID)
                        console.log('Follow')
                    }
                }
            )
    }


    render() {

        return <div>
            {this.props.isFetchingPage
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
                    // isFetchingUser={this.props.isFetchingUser}
                         isFetchingPage={this.props.isFetchingPage}/>}
        </div>
    }
}

const mapStateToProps = (state: AppStatePT): UsersPT => state.users

let obj = {followAC, setUsersAC, changePageAC, toggleIsFetchingUserAC, toggleIsFetchingPageAC}

export const UsersContainer = connect(mapStateToProps, obj)(UsersAPIcontainer)







