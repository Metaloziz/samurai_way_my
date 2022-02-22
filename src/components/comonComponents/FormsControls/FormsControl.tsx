import { WrappedFieldProps } from 'redux-form';
import style from './FormsControl.module.css';
import { memo } from 'react';

interface TextAreaType extends WrappedFieldProps {
  placeholder: string;
  inputType: string;
  typeComponent: 'input' | 'textarea';
} // другая запись для разнообразия

export const Input = memo(({
                             inputType,
                             placeholder,
                             meta,
                             input,
                             typeComponent,
                           }: TextAreaType) => {

  const showError = meta.touched && meta.error;

  return (
    <div className={`${style.formControl} ${showError ? style.error : ''}`}>
      {typeComponent == 'textarea'
        ? <textarea placeholder={placeholder} {...input} />
        : <input placeholder={placeholder} {...input} type={inputType} />}
      {showError && <div><span>{meta.error}</span></div>}
    </div>
  );
});

// export const Input = memo(({ input, placeholder, inputType, meta }: TextAreaType) => {
//
//   const showError = meta.touched && meta.error;
//
//   return (
//     <div className={`${style.formControl} ${showError ? style.error : ''}`}>
//       <input placeholder={placeholder} {...input} type={inputType} />
//       {showError && <div><span>{meta.error}</span></div>}
//     </div>
//   );
// });
