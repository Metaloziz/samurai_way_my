export {};
// import style from './FormsControl.module.css';
//
// interface TextAreaType extends WrappedFieldProps {
//   placeholder: string;
//   inputType: string;
//   typeComponent: 'input' | 'textarea';
// } // другая запись для разнообразия

// export const Input: FC<TextAreaType> = ({
//   inputType,
//   placeholder,
//   meta,
//   input,
//   typeComponent,
// }): ReactElement => {
//   const showError = meta.touched && meta.error;
//
//   const inputOrTextArea =
//     typeComponent === 'textarea' ? (
//       // eslint-disable-next-line react/jsx-props-no-spreading
//       <textarea placeholder={placeholder} {...input} />
//     ) : (
//       // eslint-disable-next-line react/jsx-props-no-spreading
//       <input placeholder={placeholder} {...input} type={inputType} />
//     );
//
//   return (
//     <div className={`${style.formControl} ${showError ? style.error : ''}`}>
//       {inputOrTextArea}
//       {showError && (
//         <div>
//           <span>{meta.error}</span>
//         </div>
//       )}
//     </div>
//   );
// };
