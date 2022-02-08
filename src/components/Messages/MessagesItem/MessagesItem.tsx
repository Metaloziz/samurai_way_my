import { ReactElement } from 'react';

import style from './MessagesItem.module.css';

export type MessagePT = {
  id: number;
  text: string;
};

export const MessagesItem = ({ text }: MessagePT): ReactElement => (
  <div className={style.message}>{text}</div>
);
