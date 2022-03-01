import { FC, ReactElement, useCallback } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { MaxLengthSymbols } from 'utils/enum/enum';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';

export type MessageReduxInputType = {
  message: string; // этот ключ не используется для отбора данных,
  // имя поля берётся из name={'message'} в <Filed />
};

const MessageReduxInput: FC<InjectedFormProps<MessageReduxInputType>> = ({
  handleSubmit,
}): ReactElement => {
  const maxLength15 = useCallback(maxLengthCreator(MaxLengthSymbols.messageForm), []);

  const callBack = (): void => {
    console.log('ornament');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="message"
        typeComponent="textarea"
        component={Input}
        placeholder="some text"
        validate={[requiredField, maxLength15]}
      />
      <button type="button" onClick={callBack}>
        Add
      </button>
    </form>
  );
};

export const AddMessageForm = reduxForm<MessageReduxInputType>({ form: 'MESSAGE' })(
  MessageReduxInput,
);
