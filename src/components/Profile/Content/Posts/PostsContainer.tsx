import {addLikeAC, addPostAC, changePostAC} from "../../../../redux/profile_reducer";
import {Posts, ProfileItemsPT} from "./Posts";
import {connect} from "react-redux";
import {AppStatePT} from "../../../../redux/store_redux";

export type profilePagePT = {
    profilePage: ProfileItemsPT
}

const mapStateToProps = ({profilePage}: AppStatePT): profilePagePT => {
    return {profilePage}
}

let obj = {addPostAC, changePostAC, addLikeAC}

export const PostsContainer = connect(mapStateToProps, obj)(Posts)