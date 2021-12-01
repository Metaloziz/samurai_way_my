import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "../../../redux/state";

export let DialogItem = (props: DialogPropsType) =>

    <div className={s.dialog}>
        <img alt={'ava'} src={props.ava} title={props.name} id={props.id.toString()}/>
        <NavLink className={s.navLink} to={'/messages/' + props.id} > {props.name} </NavLink>
    </div>