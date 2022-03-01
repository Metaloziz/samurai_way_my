import { memo } from 'react';

import style from './MessagesItem.module.css';

export type MessagePT = {
  id: number;
  text: string;
};

export const MessagesItem = memo((props: MessagePT) => (
  <div id={props.id.toString()} className={style.message}>
    {props.text}
  </div>
));
