import axios from "axios";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserDataAC, userDataPT} from "../../redux/auth_reducer";
import {AppStatePT} from "../../redux/store_redux";


type mapDispatchToPropsPT = {
    setUserDataAC: (data: userDataPT) => void
}


export class HeaderContainerAPI extends React.Component<userDataPT & mapDispatchToPropsPT> {


    componentDidMount() {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) {
                    this.props.setUserDataAC(response.data)
                    console.log(response)
                } else throw Error('resultCode: ' + response.data.resultCode)

            })
    }

    render() {
        return (
            <Header data={this.props}/> // почему не ругается типизация ?
        )
    }
}

const mapStateToProps = (state: AppStatePT): userDataPT => state.auth

export const HeaderContainer = connect(mapStateToProps, {setUserDataAC})(HeaderContainerAPI)