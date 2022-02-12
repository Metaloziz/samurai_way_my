import {addTextMessageAC} from "../../redux/dialogs_reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppStatePT} from "../../redux/store_redux";
import {compose, Dispatch} from "redux";
import {DialogPT} from "./DialogItem/DialogItem";
import {MessagePT} from "./MessagesItem/MessagesItem";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type mapStateToPropsMessageType = {
    dialogsPage: dialogsItemsPT
    isAuth: boolean
};
export type mapDispatchToPropsMessageType = {
    addNewMessage: (value: string) => void
    // changeText: (newText: string) => void
};
export type dialogsItemsPT = {
    dialogs: Array<DialogPT>
    messages: Array<MessagePT>
    // newText: string
}

class MessagesClassComponent extends React.Component<mapStateToPropsMessageType & mapDispatchToPropsMessageType> {


    onSubmit = (data: any) => {
        console.log(data)
    }


    render() {
        // if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return <Messages addNewMessage={this.props.addNewMessage}
                         // changeText={this.props.changeText}
                         dialogsPage={this.props.dialogsPage}/>;
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
        addNewMessage: (value: string) => dispatch(addTextMessageAC(value)),
        // changeText: (newText: string) => dispatch(updateTextMessageAC(newText))
    }
}


// let connectComponent = withAuthRedirect(MessagesClassComponent) // withAuthRedirect проверяет на авторизацию

export const MessagesContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesClassComponent)
