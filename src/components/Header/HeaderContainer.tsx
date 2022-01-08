import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserDataAC, userDataPT} from "../../redux/auth_reducer";
import {AppStatePT} from "../../redux/store_redux";
import {headerAPI} from "../../api/api";


type mapDispatchToPropsPT = {
    setUserDataAC: (data: userDataPT) => void
}


export class HeaderContainerAPI extends React.Component<userDataPT & mapDispatchToPropsPT> {


    componentDidMount() {

        headerAPI()
            .then((response) => {
                    if (response.resultCode === 0) {
                        this.props.setUserDataAC(response)
                        console.log('headerAPI')
                    } else throw Error('resultCode: ' + response.resultCode)
                }
            )
    }

    render() {
        return (
            <Header data={this.props}/> // почему не ругается типизация ?
        )
    }
}

const mapStateToProps = (state: AppStatePT): userDataPT => state.auth

export const HeaderContainer = connect(mapStateToProps, {setUserDataAC})(HeaderContainerAPI)