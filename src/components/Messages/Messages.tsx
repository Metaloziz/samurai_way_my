import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import s from './Messages.module.css'
import {addTextPT, dialogsItemsPT, updateTextPT} from "../../redux/state";

export let Messages = (props: dialogsItemsPT & updateTextPT & addTextPT) => {

    let dialogsDataItems = props.dialogs.map((x) => <DialogItem id={x.id} name={x.name} ava={x.ava}/>)
    let messagesDataItems = props.messages.map((x) => <MessagesItem id={x.id} text={x.text}/>)

    //---------------------------ref-------------------------
    let newMessageRef = React.createRef<HTMLTextAreaElement>()
    let addNewMessage = () => props.addText()
    //-------------------------------------------------------


    const changeText = () => {
        if (newMessageRef.current) {
            props.updateText(newMessageRef.current.value)
        }
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsDataItems}
            </div>
            <div className={s.messages}>
                {messagesDataItems}
                <textarea onChange={changeText} ref={newMessageRef} value={props.newText}/>
                <button onClick={addNewMessage}>Add</button>
            </div>

        </div>)
}
