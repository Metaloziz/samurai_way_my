import {AppStateType} from "../../redux/store_redux";
import {changePageAC, followAC, setUsersAC} from "../../redux/users_reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserPT, UsersAPIcontainer, UsersPT} from "./UsersAPIcontainer";


export type mapDispatchToPropsPT = {
    follow: (userID: number) => void
    setUsers: (users: UserPT[], totalCount: number) => void
    changePage: (pageID: number) => void
}

const mapStateToProps = (state: AppStateType): UsersPT => state.users

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPT => {

    return {
        follow: (userID) => dispatch(followAC(userID)),
        setUsers: (users, totalCount) => dispatch(setUsersAC(users, totalCount)),
        changePage: (pageID) => dispatch(changePageAC(pageID))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIcontainer)







