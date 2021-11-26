import React from "react";
import s from './Content_header.module.css'

export const ContentHeader = () => {

    let content = [
        {
            alt: 'forest',
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAnH9q1eO2cMNhym5S0zm0k3i4wvJ3tjLVg&usqp=CAU"
        }
    ]

    return (
        <div className={s.content}>

            <div className={s.item}>
                Title
                <div><img alt={content[0].alt}
                          src={content[0].src}/>
                </div>
            </div>
        </div>
    )
}