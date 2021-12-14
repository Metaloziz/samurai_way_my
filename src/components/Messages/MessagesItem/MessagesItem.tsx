import s from "./MessagesItem.module.css";
import React from "react";
import {MessagePT} from "../../../redux/store";

export let MessagesItem = (props:MessagePT) =>
    <div className={s.message}>{props.text}</div>