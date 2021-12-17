import React from "react";
import {addTextMessageAC, updateTextMessageAC} from "../../redux/dialogs_reducer";
import {Messages} from "./Messages";
import {StoreContext} from "../../StoreContext";

// type dialogsPagePT = {
//     dialogsPage: dialogsItemsPT
//     dispatch: (action: addTextMessageATPT | updateTextMessageATPT) => void
// };


export let MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {           // add store from context

                const state = store.getState().dialogsPage

                const addNewMessage = () => store.dispatch(addTextMessageAC())
                const changeText = (newText: string) => store.dispatch(updateTextMessageAC(newText))

                return <Messages dialogsPage={state} addNewMessage={addNewMessage} changeText={changeText}/>
            }}
        </StoreContext.Consumer>
    )
}