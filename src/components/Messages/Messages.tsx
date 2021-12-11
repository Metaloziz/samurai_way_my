import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import s from './Messages.module.css'
import { dialogsItemsPT} from "../../redux/_state";

type dialogsPagePT = {
    dialogsPage: dialogsItemsPT
    addTextMessage: () => void
    updateTextMessage: (message: string) => void
};



export let Messages = ({dialogsPage, addTextMessage, updateTextMessage}: dialogsPagePT ) => {

    let dialogsDataItems = dialogsPage.dialogs.map((x) => <DialogItem id={x.id} name={x.name} ava={x.ava}/>)
    let messagesDataItems = dialogsPage.messages.map((x) => <MessagesItem id={x.id} text={x.text}/>)

    //---------------------------ref-------------------------
    let newMessageRef = React.createRef<HTMLTextAreaElement>()
    let addNewMessage = () => addTextMessage()
    //-------------------------------------------------------

    const changeText = () => {
        if (newMessageRef.current) {
            updateTextMessage(newMessageRef.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsDataItems}
            </div>
            <div className={s.messages}>
                {messagesDataItems}
                <textarea onChange={changeText} ref={newMessageRef} value={dialogsPage.newText}/>
                <button onClick={addNewMessage}>Add</button>
            </div>

        </div>)
}
