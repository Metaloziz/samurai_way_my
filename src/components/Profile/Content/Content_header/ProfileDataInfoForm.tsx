import React, { ReactElement, useCallback } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import style from './ProfileDataInfoForm.module.css';

import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { ProfileDataType } from 'redux/profile_reducer';
import { MaxLengthSymbols } from 'utils/enum/enum';
import { FieldsCreator } from 'utils/fieldsCreator/fieldsCreator';
import { maxLengthCreator } from 'utils/validators/validators';

const ReduxForm = ({
  initialValues,
  handleSubmit,
  error,
}: InjectedFormProps<ProfileDataType>): ReactElement => {
  const maxLength = useCallback(maxLengthCreator(MaxLengthSymbols.profileForm), []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <b>lookingForAJob:</b>
          <Field type="checkbox" name="lookingForAJob" component={Input} />
        </div>
        <div>
          <b>lookingForAJobDescription:</b>
          <FieldsCreator value="lookingForAJobDescription" maxLength={maxLength} />
        </div>
        <div>
          <b>fullName:</b>
          <FieldsCreator value="fullName" maxLength={maxLength} />
        </div>
        <div>
          <b>about me:</b>
          <FieldsCreator value="aboutMe" maxLength={maxLength} />
        </div>
      </div>
      <b>Contacts:</b>
      <div>
        {Object.keys(initialValues.contacts!).map(el => (
          <div className={style.item} key={el}>
            <b>{el}:</b>
            <FieldsCreator value={`contacts.${el}`} maxLength={maxLength} />
          </div>
        ))}
      </div>
      <div className={style.error}>{error}</div>
      {/* попадает сюда если сработал stopSubmit AC */}
      <button type="button">add</button>
    </form>
  );
};

export const ProfileDataInfoForm = reduxForm<ProfileDataType>({ form: 'PROFILE' })(
  ReduxForm,
);
