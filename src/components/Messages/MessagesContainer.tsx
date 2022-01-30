import {addTextMessageAC, updateTextMessageAC} from "../../redux/dialogs_reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppStatePT} from "../../redux/store_redux";
import {Dispatch} from "redux";
import {DialogPT} from "./DialogItem/DialogItem";
import {MessagePT} from "./MessagesItem/MessagesItem";

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


const mapStateToProps = (state: AppStatePT): mapStateToPropsMessageType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsMessageType => {
    return {
        addNewMessage: () => dispatch(addTextMessageAC()),
        changeText: (newText: string) => dispatch(updateTextMessageAC(newText))
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)