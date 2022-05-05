import { FC } from 'react';

import { useFormik } from 'formik';

import style from './ProfileDataInfoForm.module.css';

import { Button } from 'components/comonComponents/Button/Button';
import { ContactsType, ProfileDataType, ProfileType } from 'redux/profile_reducer';

export const ProfileDataInfoForm: FC<ProfileDataInfoFormPropsType> = ({
  initialState,
  setProfileData,
}) => {
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: values => {
      setProfileData(values);
      formik.resetForm();
    },
  });

  const arr = Object.keys(initialState.contacts) as Array<keyof ContactsType>;

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <b>lookingForAJob:</b>
            <input
              id="lookingForAJob"
              name="lookingForAJob"
              type="checkbox"
              placeholder="some text"
              onChange={formik.handleChange}
              defaultChecked={formik.values.lookingForAJob}
            />
          </div>
          <div>
            <b>lookingForAJobDescription:</b>
            <input
              id="lookingForAJobDescription"
              name="lookingForAJobDescription"
              type="lookingForAJobDescription"
              placeholder="some text"
              onChange={formik.handleChange}
              value={formik.values.lookingForAJobDescription}
            />
          </div>
          <div>
            <b>fullName:</b>
            <input
              id="fullName"
              name="fullName"
              type="fullName"
              placeholder="some text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
          </div>
          <div>
            <b>about me:</b>
            <input
              id="aboutMe"
              name="aboutMe"
              type="aboutMe"
              placeholder="some text"
              onChange={formik.handleChange}
              value={formik.values.aboutMe}
            />
          </div>
        </div>
        <b>Contacts:</b>
        <div>
          {arr.map(el => (
            <div className={style.item} key={el}>
              <b>{el}:</b>
              <input
                id={el.toString()}
                name={el.toString()}
                type={el.toString()}
                placeholder="some text"
                onChange={formik.handleChange}
                defaultValue={formik.values.contacts[el]}
                value={formik.values.contacts[el]}
              />
            </div>
          ))}
        </div>
        <Button name="save" type="submit" />
      </form>
    </div>
  );
};
type ProfileDataInfoFormPropsType = {
  initialState: ProfileType;
  setProfileData: (props: ProfileDataType) => void;
};
