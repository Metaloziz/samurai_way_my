import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import style from './FormsControl.module.css';

interface TextAreaType extends WrappedFieldProps {
  placeholder: string;
} // другая запись для разнообразия

export const TextArea = (props: TextAreaType) => {

  const showError = props.meta.touched && props.meta.error;

  return (
    <div className={`${style.formControl} ${showError ? style.error : ''}`}>
      <textarea placeholder={props.placeholder} {...props.input} />
      {showError && <div><span>{props.meta.error}</span></div>}
    </div>
  );
};

export const Input = (props: TextAreaType) => {

  const showError = props.meta.touched && props.meta.error;

  return (
    <div className={`${style.formControl} ${showError ? style.error : ''}`}>
      <input placeholder={props.placeholder} {...props.input} />
      {showError && <div><span>{props.meta.error}</span></div>}
    </div>
  );
};
