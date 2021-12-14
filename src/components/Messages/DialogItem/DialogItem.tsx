import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPT} from "../../../redux/store";

export let DialogItem = (props: DialogPT) =>

    <div className={s.dialog}>
        <img alt={'ava'} src={props.ava} title={props.name} id={props.id.toString()}/>
        <NavLink className={s.navLink} to={'/messages/' + props.id} > {props.name} </NavLink>
    </div>