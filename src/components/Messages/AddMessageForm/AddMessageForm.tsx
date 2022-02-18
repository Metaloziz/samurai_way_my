import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import React, { memo, useCallback } from 'react';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';
import { TextArea } from 'components/comonComponents/FormsControls/FormsControl';

export type  MessageReduxInputType = {
  message: string   // этот ключ не используется для отбора данных,
  // имя поля берётся из name={'message'} в <Filed />
}

const MessageReduxInput = memo((props: InjectedFormProps<MessageReduxInputType>) => {

  let maxLength15 = useCallback(maxLengthCreator(30), []);

  return (
    <form onSubmit={props.handleSubmit}>
      <Field type={'text'}
             name={'message'}
             component={TextArea}
             placeholder={'some text'}
             validate={[requiredField, maxLength15]}
      />
      <button>Add</button>
    </form>
  );
});

export const AddMessageForm = reduxForm<MessageReduxInputType>({ form: 'MESSAGE' })(MessageReduxInput);