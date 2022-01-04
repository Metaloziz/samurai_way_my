import {AppStateType} from "../../redux/store_redux";
import {followAC, setUsersAC} from "../../redux/users_reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserPT, Users, UsersPT} from "./Users";


type mapDispatchToPropsPT = {
    follow: (userID: number) => void
    setUsers: (users: UserPT[]) => void
}

const mapStateToProps = (state: AppStateType): UsersPT => state.users

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPT => {

    return {
        follow: (userID) => dispatch(followAC(userID)),
        setUsers: (userFromAPI) => dispatch(setUsersAC(userFromAPI))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)







