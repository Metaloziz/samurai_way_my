import {addTextMessageAC, updateTextMessageAC} from "../../redux/dialogs_reducer";
import {dialogsItemsPT, Messages} from "./Messages";
import {connect} from "react-redux";

import {actionPT, AppStateType} from "../../redux/store_redux";

type mainDialogsPagePT = {
    dialogsPage: dialogsItemsPT
};
type mapDispatchToPropsPT = {
    addNewMessage: () => void
    changeText: (newText: string) => void
};


const mapStateToProps = (state: AppStateType): mainDialogsPagePT => ({dialogsPage: state.dialogsPage})


const mapDispatchToProps = (dispatch: (action: actionPT) => void): mapDispatchToPropsPT => {
    return {
        addNewMessage: () => dispatch(addTextMessageAC()),
        changeText: (newText: string) => dispatch(updateTextMessageAC(newText))
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)