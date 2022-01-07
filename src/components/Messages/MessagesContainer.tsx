import {addTextMessageAC, updateTextMessageAC} from "../../redux/dialogs_reducer";
import {dialogsItemsPT, Messages} from "./Messages";
import {connect} from "react-redux";

import {AppStatePT} from "../../redux/store_redux";
import {Dispatch} from "redux";

type mainDialogsPagePT = {
    dialogsPage: dialogsItemsPT
};
type mapDispatchToPropsPT = {
    addNewMessage: () => void
    changeText: (newText: string) => void
};


const mapStateToProps = (state: AppStatePT): mainDialogsPagePT => ({dialogsPage: state.dialogsPage})


const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPT => {
    return {
        addNewMessage: () => dispatch(addTextMessageAC()),
        changeText: (newText: string) => dispatch(updateTextMessageAC(newText))
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)