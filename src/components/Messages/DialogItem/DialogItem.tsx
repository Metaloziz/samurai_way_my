import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogPT = {
    id: number
    name: string
    ava: string
}

export let DialogItem = (props: DialogPT) =>

    <div className={style.dialog}>
        <img alt={'ava'} src={props.ava} title={props.name} id={props.id.toString()}/>
        <NavLink className={style.navLink} to={'/messages/' + props.id} > {props.name} </NavLink>
    </div>