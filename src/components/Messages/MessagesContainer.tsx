import {addTextMessageAC, updateTextMessageAC} from "../../redux/dialogs_reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppStatePT} from "../../redux/store_redux";
import {compose, Dispatch} from "redux";
import {DialogPT} from "./DialogItem/DialogItem";
import {MessagePT} from "./MessagesItem/MessagesItem";
import React from "react";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type mapStateToPropsMessageType = {
    dialogsPage: dialogsItemsPT
    isAuth: boolean
};
export type mapDispatchToPropsMessageType = {
    addNewMessage: () => void
    changeText: (newText: string) => void
};
export type dialogsItemsPT = {
    dialogs: Array<DialogPT>
    messages: Array<MessagePT>
    newText: string
}

class MessagesClassComponent extends React.Component<mapStateToPropsMessageType & mapDispatchToPropsMessageType> {

    render() {
        // if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return <Messages {...this.props}/>;
    }
}


const mapStateToProps = (state: AppStatePT): mapStateToPropsMessageType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth // add
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsMessageType => {
    return {
        addNewMessage: () => dispatch(addTextMessageAC()),
        changeText: (newText: string) => dispatch(updateTextMessageAC(newText))
    }
}


// let connectComponent = withAuthRedirect(MessagesClassComponent) // withAuthRedirect проверяет на авторизацию
//
// export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(connectComponent)

export const MessagesContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesClassComponent)
