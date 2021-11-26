import s from "./MessagesItem.module.css";
import React from "react";
import {MessagePropsType} from "../../../redux/state";

export let MessagesItem = (props:MessagePropsType) =>
    <div className={s.message}>{props.text}</div>