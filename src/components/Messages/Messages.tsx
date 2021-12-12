import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import s from './Messages.module.css'
import {
    addTextMessageAC,
    addTextMessageATPT,
    dialogsItemsPT,
    updateTextMessageAC,
    updateTextMessageATPT
} from "../../redux/_state";

type dialogsPagePT = {
    dialogsPage: dialogsItemsPT
    dispatch: (action: addTextMessageATPT | updateTextMessageATPT) => void
};


export let Messages = ({dialogsPage, dispatch}: dialogsPagePT) => {

    let dialogsDataItems = dialogsPage.dialogs.map((x) => <DialogItem id={x.id} name={x.name} ava={x.ava}/>)
    let messagesDataItems = dialogsPage.messages.map((x) => <MessagesItem id={x.id} text={x.text}/>)

    //---------------------------ref-------------------------
    let newMessageRef = React.createRef<HTMLTextAreaElement>()
    let addNewMessage = () => {

        if (newMessageRef.current?.value) {              // check empty
            dispatch(addTextMessageAC())
        }
    }
    //-------------------------------------------------------

    const changeText = () => {
        if (newMessageRef.current) {
            let newText = newMessageRef.current.value
            dispatch(updateTextMessageAC(newText))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsDataItems}
            </div>
            <div className={s.messages}>
                {messagesDataItems}
                <textarea onChange={changeText} ref={newMessageRef} value={dialogsPage.newText}
                          placeholder={'Some text from State'}/>
                <button onClick={addNewMessage}>Add</button>
            </div>

        </div>)
}
