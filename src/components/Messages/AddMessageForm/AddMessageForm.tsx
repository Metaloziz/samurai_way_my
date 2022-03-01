import { FC, ReactElement } from 'react';

import { useFormik } from 'formik';

import { CommonConstants } from 'utils/enum/enum';

export type MessageReduxInputType = {
  message: string; // этот ключ не используется для отбора данных,
  // имя поля берётся из name={'message'} в <Filed />
};

export const AddMessageForm: FC = (): ReactElement => {
  // const maxLength15 = useCallback(maxLengthCreator(MaxLengthSymbols.messageForm), []);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: values => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, CommonConstants.two));
    },
  });
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
