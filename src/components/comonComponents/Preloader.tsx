import s from "../Users/Users.module.css";
import loader from "../Users/imgAva/blak_water.gif";
import React from "react";

export const Preloader = () => {
    return <img className={s.loader} alt={'loader'} src={loader}/>
}