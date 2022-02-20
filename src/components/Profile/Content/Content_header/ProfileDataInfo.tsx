import { ContactsType, ProfileType } from 'redux/profile_reducer';
import {
  ProfileData,
} from 'components/Profile/Content/Content_header/ProfileData';
import style from 'components/Profile/Content/Content_header/Content_header.module.css';
import React from 'react';
import { Contacts } from 'components/Profile/Content/Content_header/Contacts';

export const ProfileDataInfo = (props: { profile: ProfileType }) => {

  // let arr: Array<keyof ContactsType> = [...Object.keys(props.profile.contacts)];

  let a = props.profile.contacts['facebook'];
  return (
    <div>
      <ProfileData profile={props.profile} />
      <div className={style.contacts}>

        {Object.keys(props.profile.contacts)
          .map((el) => <div><b>{el}:</b> {props.profile.contacts[el]}</div>)
        };

        {/* {arr.map((el) => { */}
        {/*   return <Contacts key={el} */}
        {/*                    site={el} */}
        {/*                    value={props.profile.contacts[el]} />; */}
        {/* })} */}
      </div>
    </div>);
};