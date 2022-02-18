import s from './MessagesItem.module.css';
import React, { memo } from 'react';

export type MessagePT = {
  id: number
  text: string
}

export let MessagesItem = memo((props: MessagePT) =>
  <div className={s.message}>{props.text}</div>);