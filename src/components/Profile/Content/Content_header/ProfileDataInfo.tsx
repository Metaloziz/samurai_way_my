import { ContactsType, ProfileType } from 'redux/profile_reducer';
import {
  ProfileData,
} from 'components/Profile/Content/Content_header/ProfileData';
import style from 'components/Profile/Content/Content_header/Content_header.module.css';
import React from 'react';
import { Contacts } from 'components/Profile/Content/Content_header/Contacts';

type NewType = keyof ContactsType

export const ProfileDataInfo = (props: { profile: ProfileType }) => {

  let arr = Object.keys(props.profile.contacts) as NewType[];

  return (
    <div>
      <ProfileData profile={props.profile} />
      <div className={style.contacts}>

        {arr.map((el) => <Contacts value={props.profile.contacts[el]}
                                   key={el}
                                   site={el} />)}
      </div>
    </div>);
};