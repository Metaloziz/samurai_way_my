import React from "react";
import {Header, userDataPT} from "./Header";
import {connect} from "react-redux";
import {setUserDataThunkCreator} from "../../redux/auth_reducer";
import {AppStatePT} from "../../redux/store_redux";


type mapDispatchToPropsPT = {
    setUserDataThunkCreator: () => void
}


export class HeaderContainerAPI extends React.Component<userDataPT & mapDispatchToPropsPT> {


    componentDidMount() {


        this.props.setUserDataThunkCreator()


        // headerAPI()
        //     .then((response) => {
        //             if (response.resultCode === 0) {
        //                 this.props.setUserDataAC(response)
        //                 console.log('headerAPI')
        //             } else throw Error('resultCode: ' + response.resultCode)
        //         }
        //     )
    }

    render() {
        return (
            <Header data={this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStatePT): userDataPT => state.auth


export const HeaderContainer = connect(mapStateToProps, {setUserDataThunkCreator})(HeaderContainerAPI)