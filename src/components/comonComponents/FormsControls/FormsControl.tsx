import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from './FormsControl.module.css'


interface TextAreaType extends WrappedFieldProps {
    placeholder: string
} // другая запись для разнообразия


export const TextArea = (props: TextAreaType) => {


    const showError = props.meta.touched && props.meta.error

    return (
        <div className={s.formControl}>
            <textarea placeholder={props.placeholder} {...props.input}/>
            {showError && <div><span>error</span></div>}
        </div>
    );
};
