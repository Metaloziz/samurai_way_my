import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import s from './Messages.module.css'
import {dialogsItemsPT} from "../../redux/state";

export let Messages = (props: dialogsItemsPT) => {

    let dialogsDataItems = props.dialogs.map((x) => <DialogItem  id={x.id} name={x.name} ava={x.ava}/>)
    let messagesDataItems = props.messages.map((x) => <MessagesItem id={x.id} text={x.text}/>)

    let newMessageRef = React.createRef<HTMLTextAreaElement>()

    let addNewMessage = () => console.log(newMessageRef.current?.value)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsDataItems}
            </div>
            <div className={s.messages}>
                {messagesDataItems}
                <textarea ref={newMessageRef}>text</textarea>
                <button onClick={addNewMessage}>Add</button>
            </div>

        </div>)
}
