import {AppStateType} from "../../redux/store_redux";
import {followAC} from "../../redux/users_reducer";
import {connect} from "react-redux";
import {Users, usersStatePT} from "./Users";
import {Dispatch} from "redux";


type mapDispatchToPropsPT = {
    follow: (userID: number) => void
}


const mapStateToProps = (state: AppStateType): usersStatePT => state.users

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPT => {

    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)







