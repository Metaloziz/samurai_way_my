import {addPostAC, updateAddTextPostAC} from "../../../../redux/profile_reducer";
import {Posts, ProfileItemsPT} from "./Posts";
import {connect} from "react-redux";
import {actionPT, AppStateType} from "../../../../redux/store_redux";

export type profilePagePT = {
    profilePage: ProfileItemsPT
}

const mapStateToProps = (state: AppStateType): profilePagePT => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: (action: actionPT) => void) => {
    return {
        addNewPost: () => dispatch(addPostAC()),
        changePost: (newText: string) => dispatch(updateAddTextPostAC(newText))
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)