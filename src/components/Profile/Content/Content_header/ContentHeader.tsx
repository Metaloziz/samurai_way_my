import { ReactElement } from 'react';

import { Preloader } from '../../../comonComponents/Preloader';
import { ContentHeaderPT } from '../../Profile';
import { ProfileStatus } from '../../ProfileStatus/ProfileStatus';

import style from './Content_header.module.css';

export const ContentHeader = ({
  status,
  profile,
  updateUserStatusThunkCreator,
}: ContentHeaderPT): ReactElement => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={style.content}>
      <div className={style.item}>
        Title
        <img alt="ava" src={profile.photos.large} />
        <ProfileStatus
          status={status}
          updateUserStatusThunkCreator={updateUserStatusThunkCreator}
        />
        <div>
          <div>about me: {profile.aboutMe}</div>
          <div>contacts: {profile.contacts.facebook}</div>
          <div>lookingForAJob: {profile.lookingForAJob ? 'true' : 'false'}</div>
          <div>fullName: {profile.fullName}</div>
        </div>
      </div>
    </div>
  );
};
