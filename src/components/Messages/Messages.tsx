import { FC } from 'react';

import { AddMessageForm, MessageReduxInputType } from './AddMessageForm/AddMessageForm';
import { DialogItem } from './DialogItem/DialogItem';
import style from './Messages.module.css';
import {
  mapDispatchToPropsMessageType,
  mapStateToPropsMessageType,
} from './MessagesContainer';
import { MessagesItem } from './MessagesItem/MessagesItem';

export const Messages: FC<mapStateToPropsMessageType & mapDispatchToPropsMessageType> = ({
  dialogsPage,
  addNewMessage,
}) => {
  const dialogsDataItems = dialogsPage.dialogs.map(item => (
    <DialogItem key={item.id} id={item.id} name={item.name} ava={item.ava} />
  ));

  const messagesDataItems = dialogsPage.messages.map(item => (
    <MessagesItem key={item.id} id={item.id} text={item.text} />
  ));

  const addNewPost = (data: MessageReduxInputType): void => {
    console.log(data);
    if (data.message) {
      addNewMessage(data.message.trim());
    } else {
      console.warn('field is empty');
    }
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsDataItems}</div>
      <div className={style.messages}>
        <div>{messagesDataItems}</div>
        <div>
          <AddMessageForm onSubmit={addNewPost} />
        </div>
      </div>
    </div>
  );
};
