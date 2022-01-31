import React from "react";
import s from './Content_header.module.css'
import {ContentHeaderPT} from "../../Profile";
import {Preloader} from "../../../comonComponents/Preloader";
import {ProfileStatus} from "../../ProfileStatus/ProfileStatus";

export const ContentHeader = (props: ContentHeaderPT) => {

    if (!props.profile) {
        return <Preloader/>
    }

    // let content = [
    //     {
    //         alt: 'forest',
    //         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAnH9q1eO2cMNhym5S0zm0k3i4wvJ3tjLVg&usqp=CAU"
    //     }
    // ]

    return (
        <div className={s.content}>
            <div className={s.item}>Title
                {/*<div>*/}
                {/*    <img alt={content[0].alt} src={content[0].src}/>*/}
                {/*</div>*/}
                <img alt={'ava'} src={props.profile.photos.large}/>
                <ProfileStatus value={"status"}/>
                <div>
                    <div>about me: {props.profile.aboutMe}</div>
                    <div>contacts: {props.profile.contacts["facebook"]}</div>
                    <div>lookingForAJob: {props.profile.lookingForAJob ? "true" : "false"}</div>
                    <div>fullName: {props.profile.fullName}</div>
                </div>
            </div>
        </div>
    )
}