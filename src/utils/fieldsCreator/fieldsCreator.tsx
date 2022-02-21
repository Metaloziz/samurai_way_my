import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { requiredField } from 'utils/validators/validators';
import { Field } from 'redux-form';

type FieldsCreatorType = {
  maxLength: (value: string) => (string | undefined)
  value: string
}

export function FieldsCreator({ maxLength, value }: FieldsCreatorType) {
  return (
    <div>
      <Field
        type='text'
        name={value}
        component={Input}
        validate={[requiredField, maxLength]} />
    </div>
  );
};
