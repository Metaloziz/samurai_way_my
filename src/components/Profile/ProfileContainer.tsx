import React from "react";
import {Profile, ProfileOnePT, ProfilePT} from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile_reducer";
import {AppStatePT} from "../../redux/store_redux";
import {useParams} from "react-router-dom";


type mapDispatchToProps = {
    setUserProfileAC: (profile: ProfilePT) => void
}


export class ProfileContainerAPI extends React.Component<ProfileOnePT & mapDispatchToProps & { params: PathParamPT }> {

    componentDidMount() {
        let userId: string = this.props.params.userId

        console.log(userId)
        if (!userId) {
            userId = '4';
        }

        axios.default
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((state) => this.props.setUserProfileAC(state.data))
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


type PathParamPT = {
    userId: string
}


export const withRouter = (WrappedComponent: typeof React.Component) => {

    return (props: object) => {

        const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.

        return (
            <WrappedComponent {...props} params={params}/>
        );
    }
}

const ProfileContainerURL = withRouter(ProfileContainerAPI)

const mapStateToProps = (state: AppStatePT): ProfileOnePT => state.profilePage

export const ProfileContainer = connect(mapStateToProps, {setUserProfileAC})(ProfileContainerURL)