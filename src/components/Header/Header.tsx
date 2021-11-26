import React from "react";
import s from './Header.module.css'


type b = {
    logo: string
}

export const Header = (a:b) => {
    return (
        <div className={s.header}>
            <img alt={'logo'}
                 src="https://pngimage.net/wp-content/uploads/2018/05/circle-effect-png.png"/>
            <div>{a.logo}</div>
        </div>
    )
}