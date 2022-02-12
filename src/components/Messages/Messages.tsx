import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import { MessagesItem } from './MessagesItem/MessagesItem';
import style from './Messages.module.css';
import {
  mapDispatchToPropsMessageType,
  mapStateToPropsMessageType,
} from './MessagesContainer';
import { AddMessageForm, MessageReduxInputType } from './AddMessageForm/AddMessageForm';

export let Messages = (props: Omit<mapStateToPropsMessageType, 'isAuth'>
  & mapDispatchToPropsMessageType) => {

  let dialogsDataItems = props.dialogsPage.dialogs
    .map((item, index) => <DialogItem key={index} id={item.id} name={item.name}
                                      ava={item.ava} />);

  let messagesDataItems = props.dialogsPage.messages
    .map((item, index) => <MessagesItem key={index} id={item.id} text={item.text} />);

  let addNewPost = (data: MessageReduxInputType) => {
    console.log(data);
    if (data.message) {              // check empty
      props.addNewMessage(data.message.trim());
    } else {
      console.warn('field is empty');
    }
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsDataItems}
      </div>
      <div className={style.messages}>
        <div>{messagesDataItems}</div>
        <div>
          <AddMessageForm onSubmit={addNewPost} />
        </div>
      </div>
    </div>);
};
