import s from "./MessagesItem.module.css";
import React from "react";

export type MessagePT = {
    id: number
    text: string
}

export let MessagesItem = (props:MessagePT) =>
    <div className={s.message}>{props.text}</div>