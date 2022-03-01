import { FC, ReactElement } from 'react';

import { useFormik } from 'formik';

// import { CommonConstants } from 'utils/enum/enum';

export type MessageFormikInputType = {
  message: string;
};

type AddMessageFormPropsType = {
  addNewMessageHandle: (data: MessageFormikInputType) => void;
};

export const AddMessageForm: FC<AddMessageFormPropsType> = ({
  addNewMessageHandle,
}): ReactElement => {
  // const maxLength15 = useCallback(maxLengthCreator(MaxLengthSymbols.messageForm), []);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, CommonConstants.two));
      addNewMessageHandle(values);
      formik.resetForm();
    },
  });
  // const resetForm = (): void => {
  //   setTimeout(() => {
  //     formik.resetForm();
  //   }, CommonConstants.two);
  // };

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="message"
        name="message"
        type="message"
        placeholder="some text"
        onChange={formik.handleChange}
        value={formik.values.message}
        // validate={[requiredField, maxLength15]}
      />
      <button type="submit">Add</button>
    </form>
  );
};
