import s from "./MessagesItem.module.css";
import React from "react";
import {MessagePT} from "../../../redux/_state";

export let MessagesItem = (props:MessagePT) =>
    <div className={s.message}>{props.text}</div>