import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import s from './Messages.module.css'
import {
    mapDispatchToPropsMessageType,
    mapStateToPropsMessageType
} from "./MessagesContainer";
import {AddMessageForm, MessageReduxInputType} from "./AddMessageForm/AddMessageForm";


export let Messages = (props: Omit<mapStateToPropsMessageType, "isAuth">
    & mapDispatchToPropsMessageType) => {

    let dialogsDataItems = props.dialogsPage.dialogs
        .map((item, index) => <DialogItem key={index} id={item.id} name={item.name}
                                          ava={item.ava}/>)

    let messagesDataItems = props.dialogsPage.messages
        .map((item, index) => <MessagesItem key={index} id={item.id} text={item.text}/>)

    let addNewPost = (data: MessageReduxInputType) => {

        if (data.message) {              // check empty
            props.addNewMessage(data.message.trim())
        } else {
            console.warn('field is empty')
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsDataItems}
            </div>
            <div className={s.messages}>
                <div>{messagesDataItems}</div>
                <div>
                    <AddMessageForm onSubmit={addNewPost}/>
                </div>
            </div>
        </div>)
}
