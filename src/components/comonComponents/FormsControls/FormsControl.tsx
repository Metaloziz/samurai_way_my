import { ReactElement } from 'react';

import { WrappedFieldProps } from 'redux-form';

import s from './FormsControl.module.css';

interface TextAreaType extends WrappedFieldProps {
  placeholder: string;
} // другая запись для разнообразия

export const TextArea = ({ placeholder, input, meta }: TextAreaType): ReactElement => {
  const showError = meta.touched && meta.error;

  return (
    <div className={s.formControl}>
      {/* input is standard props */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <textarea placeholder={placeholder} {...input} />
      {showError && (
        <div>
          <span>error</span>
        </div>
      )}
    </div>
  );
};
