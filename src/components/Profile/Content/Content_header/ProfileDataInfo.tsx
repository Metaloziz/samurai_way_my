import { ReactElement } from 'react';

import style from 'components/Profile/Content/Content_header/Content_header.module.scss';
import { ContactsType, ProfileType } from 'redux/profile_reducer';

type ProfileDataInfoType = {
  profile: ProfileType;
};

export const ProfileDataInfo = ({ profile }: ProfileDataInfoType): ReactElement => {
  const arr = Object.keys(profile.contacts) as Array<keyof ContactsType>;

  return (
    <div>
      <div>
        <div>
          <b>lookingForAJob:</b> {`${profile.lookingForAJob}`}
        </div>
        <div>
          <b>lookingForAJobDescription:</b> {`${profile.lookingForAJobDescription}`}
        </div>
        <div>
          <b>fullName:</b> {profile.fullName}
        </div>
        <div>
          <b>about me:</b> {profile.aboutMe}
        </div>
        <b>Contacts:</b>
      </div>
      <div className={style.contacts}>
        {arr.map(el => (
          <div key={el}>
            <b>{el}:</b> {profile.contacts[el]}
          </div>
        ))}
      </div>
    </div>
  );
};
