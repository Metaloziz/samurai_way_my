import React from "react";
import {connect} from "react-redux";
import {AppStatePT} from "../../redux/store_redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    sePageThunkCreator,
    unFollowThunkCreator
} from "../../redux/users_reducer";
import {Users} from "./Users";
import {Preloader} from "../comonComponents/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type mapDispatchToPropsPT = {
    // followAC: (userID: number) => void
    // setUsersAC: (users: UserPT[], totalCount: number) => void
    // changePageAC: (pageID: number) => void
    // toggleIsFetchingPageAC: (isFetching: boolean) => void
    // toggleIsFetchingUserAC: (isFetching: boolean, userID: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    sePageThunkCreator: (pageID: number, pageSize: number) => void
    unFollowThunkCreator: (userID: number) => void
    followThunkCreator: (userID: number) => void
}
export type UsersStatePT = {
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


export class UsersAPIcontainer extends React.Component<UsersStatePT & mapDispatchToPropsPT> {

    componentDidMount = () => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // debugger
        // this.props.toggleIsFetchingPageAC(true)
        // setUserDataAPI(this.props.currentPage, this.props.pageSize)
        //     .then((state) => {
        //         console.log('setUserDataAPI')
        //         this.props.setUsersAC(state.items, state.totalCount)
        //     })
        // this.props.toggleIsFetchingPageAC(false)
    }

    setPage = (pageID: number) => {
        this.props.sePageThunkCreator(pageID, this.props.pageSize)
        //
        // this.props.toggleIsFetchingPageAC(true)
        //
        // this.props.changePageAC(pageID)
        // setUserOnPageAPI(pageID, this.props.pageSize)
        //     .then((state) => {
        //         this.props.setUsersAC(state.items, state.totalCount)
        //         this.props.toggleIsFetchingPageAC(false)
        //         console.log('setUserOnPageAPI')
        //     })
    }

    unFollow = (userID: number) => {
        this.props.unFollowThunkCreator(userID)
        // this.props.toggleIsFetchingUserAC(true, userID)
        // setUnFollowAPI(userID)
        //     .then(response => {
        //             if (response.resultCode === 0) {
        //                 this.props.followAC(userID)
        //                 this.props.toggleIsFetchingUserAC(false, userID)
        //                 console.log('unFollow')
        //             }
        //         }
        //     )
    }

    follow = (userID: number) => {
        this.props.followThunkCreator(userID)
        // this.props.toggleIsFetchingUserAC(true, userID)
        // setFollowAPI(userID)
        //     .then(response => {
        //             if (response.resultCode === 0) {
        //                 this.props.followAC(userID)
        //                 this.props.toggleIsFetchingUserAC(false, userID)
        //                 console.log('Follow')
        //             }
        //         }
        //     )
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

type mapStateToPropsType = (state: AppStatePT) => UsersStatePT

const mapStateToProps: mapStateToPropsType = (state: AppStatePT): UsersStatePT => {
    return state.users
}

let mapDispatchToProps: mapDispatchToPropsPT = {
    getUsersThunkCreator,
    sePageThunkCreator,
    unFollowThunkCreator,
    followThunkCreator,
}


let connectComponent = connect(mapStateToProps, mapDispatchToProps)(UsersAPIcontainer)

export const UsersContainer = withAuthRedirect(connectComponent)


// setUsersAC: (props)=> dispatch(setUsersAC(props))






