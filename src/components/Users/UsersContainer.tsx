
import {actionPT, AppStateType} from "../../redux/store_redux";
import {followAC} from "../../redux/users_reducer";
import {connect} from "react-redux";
import {Users, usersStatePT} from "./Users";


const mapStateToProps = (state: AppStateType): usersStatePT => {

    return state.users

}

const mapDispatchToProps = (dispatch: (action: actionPT) => void) => {

    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        }
    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)







