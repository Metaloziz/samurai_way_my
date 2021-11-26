import React from "react";
import {Area_posts} from "./Content/Posts/Area_posts";
import s from './Profile.module.css'
import {Content_header} from "./Content/Content_header/Content_header";

export const Profile = () => {
    return (
        <div>
            <Content_header/>
            <Area_posts/>
        </div>
    )
}