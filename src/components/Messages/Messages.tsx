import React from "react";
import {DialogItem, DialogPT} from "./DialogItem/DialogItem";
import {MessagePT, MessagesItem} from "./MessagesItem/MessagesItem";
import s from './Messages.module.css'


export type dialogsPagePT = {
    dialogsPage: dialogsItemsPT
    addNewMessage: () => void
    changeText: (newText: string) => void
};
export type dialogsItemsPT = {
    dialogs: Array<DialogPT>
    messages: Array<MessagePT>
    newText: string
}


export let Messages = ({dialogsPage, addNewMessage, changeText}: dialogsPagePT) => {

    let dialogsDataItems = dialogsPage.dialogs.map((x, index) =>
        <DialogItem key={index} id={x.id} name={x.name} ava={x.ava}/>)

    let messagesDataItems = dialogsPage.messages.map((x, index) =>
        <MessagesItem key={index} id={x.id} text={x.text}/>)

    //---------------------------ref-------------------------
    let newMessageRef = React.createRef<HTMLTextAreaElement>()
    //-------------------------------------------------------

    let addNewText = () => {
        if (newMessageRef.current?.value) {              // check empty
            addNewMessage()
        }
    }

    const changeTextArea = () => {
        if (newMessageRef.current) {
            let newText = newMessageRef.current.value
            changeText(newText)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsDataItems}
            </div>
            <div className={s.messages}>
                <div>{messagesDataItems}</div>
                <div><textarea onChange={changeTextArea}
                               ref={newMessageRef}
                               value={dialogsPage.newText}
                               placeholder={'Some text from State'}/>
                    <button onClick={addNewText}>Add</button>
                </div>
            </div>
        </div>)
}
