import React from "react";
import {ContentHeaderPT, Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserStatusThunkCreator, setUserThunkCreator} from "../../redux/profile_reducer";
import {AppStatePT} from "../../redux/store_redux";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapDispatchToPropsType = {
    // setUserProfileAC: (profile: ProfilePT) => void
    setUserThunkCreator: (useId: string) => void
    setUserStatusThunkCreator: (status: string) => void
}

type PathParamPT = {
    userId: string
}


export class ProfileContainerAPI extends React.Component<ContentHeaderPT & mapDispatchToPropsType & { params: PathParamPT }> {


    componentDidMount() {

        let userID = this.props.params.userId

        if (!userID) {
            userID = '21608';
        }

        this.props.setUserThunkCreator(userID)
        this.props.setUserStatusThunkCreator(userID)
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
        // debugger
    }


    render() {
        // return <Profile profile={this.props.profile}/>
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: AppStatePT): ContentHeaderPT => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


const mapDispatchToProps: mapDispatchToPropsType = {
    setUserThunkCreator: setUserThunkCreator,
    setUserStatusThunkCreator: setUserStatusThunkCreator
}

export const withRouter = (WrappedComponent: typeof React.Component) => {
    return (props: object) => {
        const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.
        return (
            <WrappedComponent {...props} params={params}/>
        );
    }
}

// const ProfileContainerURL = withRouter(ProfileContainerAPI)
//
// let connectComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerURL)
//
// export const ProfileContainer = withAuthRedirect(connectComponent)
//

export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainerAPI)


