import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import s from './Messages.module.css'
import {ConversationsPropsType} from "../../redux/state";

export let Messages = (props: ConversationsPropsType) => {

    let dialogsDataItems = props.dialogs.map((x) => <DialogItem id={x.id} name={x.name}/>)
    let messagesDataItems = props.messages.map((x) => <MessagesItem id={x.id} text={x.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsDataItems}
            </div>
            <div className={s.messages}>
                {messagesDataItems}
            </div>
        </div>)
}
