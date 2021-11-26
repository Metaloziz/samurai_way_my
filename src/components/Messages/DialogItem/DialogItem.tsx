import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogPropsType} from "../../../redux/state";

export let DialogItem = (props: DialogPropsType) =>
    <div className={s.dialog}>
        <NavLink to={'/messages/' + props.id}> {props.name} </NavLink>
    </div>