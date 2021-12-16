import React from "react";
import {addTextMessageATPT, dialogsItemsPT, updateTextMessageATPT} from "../../redux/store";
import {addTextMessageAC, updateTextMessageAC} from "../../redux/dialogs_reducer";
import {Messages} from "./Messages";

type dialogsPagePT = {
    dialogsPage: dialogsItemsPT
    dispatch: (action: addTextMessageATPT | updateTextMessageATPT) => void
};


export let MessagesContainer = ({dialogsPage, dispatch}: dialogsPagePT) => {

    let addNewMessage = () => {
        dispatch(addTextMessageAC())
    }

    const changeText = (newText: string) => {
        dispatch(updateTextMessageAC(newText))
    }

    return (<Messages dialogsPage={dialogsPage} addNewMessage={addNewMessage} changeText={changeText}/>)
}