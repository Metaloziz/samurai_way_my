import { ReactElement } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type MessageReduxInputType = {
  message: string; // этот ключ не используется для отбора данных,
  // имя поля берётся из name={'message'}
};

const MessageReduxInput = ({
  handleSubmit,
}: InjectedFormProps<MessageReduxInputType>): ReactElement => (
  <form onSubmit={handleSubmit}>
    <Field type="text" name="message" component="textarea" placeholder="some text" />
    <button type="button">Add</button>
  </form>
);

export const AddMessageForm = reduxForm<MessageReduxInputType>({ form: 'MESSAGE' })(
  MessageReduxInput,
);
