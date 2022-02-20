import { ProfileType } from 'redux/profile_reducer';
import React, { useCallback } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';
import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import style from './ProfileDataInfoForm.module.css';

export type ProfileDataInfoFormPT = {
  profile: ProfileType
}

const ReduxForm = (props: InjectedFormProps<ProfileDataInfoFormPT>) => {

  let maxLength = useCallback(maxLengthCreator(30), []);

  let arr = ['aboutMe', 'lookingForAJob',
    'lookingForAJobDescription', 'fullName',
    'github', 'vk', 'facebook', 'instagram', 'twitter', 'website', 'youtube', 'mainLink'];

  return (

    <form onSubmit={props.handleSubmit}>
      <div>
        {arr.map((el) => {
          return <div className={style.item} key={el}><b>{el}:</b><Field
            type='text'
            name={el}
            placeholder={el}
            component={Input}
            validate={[requiredField, maxLength]} />
          </div>;
        })}

      </div>
      <button>add</button>
    </form>
  );
};

export const ProfileDataInfoForm = reduxForm<ProfileDataInfoFormPT>({ form: 'PROFILE' })(ReduxForm);