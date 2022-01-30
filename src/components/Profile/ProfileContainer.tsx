import React from "react";
import {Profile, ProfileOnePT} from "./Profile";
import {connect} from "react-redux";
import {setUserThunkCreator} from "../../redux/profile_reducer";
import {AppStatePT} from "../../redux/store_redux";
import {useParams} from "react-router-dom";


type mapDispatchToProps = {
    // setUserProfileAC: (profile: ProfilePT) => void
    setUserThunkContainer: (useId: string) => void
}

type PathParamPT = {
    userId: string
}


export class ProfileContainerAPI extends React.Component<ProfileOnePT & mapDispatchToProps & { params: PathParamPT }> {


    componentDidMount() {

        let userID = this.props.params.userId

        if (!userID) {
            userID = '21608';
        }

        this.props.setUserThunkContainer(userID)
        // let userId = this.props.params.userId
        //
        // if (!userId) {
        //     userId = '2';
        // }
        //
        // profileAPI(userId).then((state) => {
        //     this.props.setUserProfileAC(state)
        //     console.log('profileAPI')
        // })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
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

export const ProfileContainer = connect(mapStateToProps, {setUserThunkContainer: setUserThunkCreator})(ProfileContainerURL)