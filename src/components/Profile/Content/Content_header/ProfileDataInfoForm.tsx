import { ProfileDataType } from 'redux/profile_reducer';
import React, { useCallback } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';
import style from './ProfileDataInfoForm.module.css';
import { FieldsCreator } from 'utils/fieldsCreator/fieldsCreator';
import { Input } from 'components/comonComponents/FormsControls/FormsControl';

const ReduxForm = ({
                     initialValues,
                     handleSubmit, error,
                   }: InjectedFormProps<ProfileDataType>) => {

  let maxLength = useCallback(maxLengthCreator(100), []);

  // let arr: Array<keyof ContactsType> = [];
  //
  // if (initialValues.contacts) {
  //   arr = Object.keys(initialValues.contacts) as Array<keyof ContactsType>;
  // }

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <div><b>lookingForAJob:</b>
          <Field
            type='checkbox'
            name={'lookingForAJob'}
            component={Input}
          />
        </div>
        <div>
          <b>lookingForAJobDescription:</b>
          <FieldsCreator value={'lookingForAJobDescription'} maxLength={maxLength} />
        </div>
        <div><b>fullName:</b>
          <FieldsCreator value={'fullName'} maxLength={maxLength} />
        </div>
        <div><b>about me:</b>
          <FieldsCreator value={'aboutMe'} maxLength={maxLength} /></div>
      </div>
      <b>Contacts:</b>
      <div>
        {Object.keys(initialValues.contacts!).map((el) => {

          return <div className={style.item} key={el}><b>{el}:</b>

            <FieldsCreator value={`contacts.` + el} maxLength={maxLength} />

          </div>;
        })}
      </div>
      <div className={style.error}>{error}</div>
      {/* попадает сюда если сработал stopSubmit AC*/}
      <button>add</button>
    </form>
  );
};

export const ProfileDataInfoForm = reduxForm<ProfileDataType>({ form: 'PROFILE' })(ReduxForm);