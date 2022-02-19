import React, { memo } from 'react';
import style from './Content_header.module.css';
import { ContentHeaderPT } from '../../Profile';
import { Preloader } from '../../../comonComponents/Preloader';
import {
  ProfileStatusWithHooks,
} from 'components/Profile/ProfileStatus/ProfileStatusWithHooks';
import stockAva from '../../../Users/imgAva/user.png';

export const ContentHeader = memo(({
                                     profile,
                                     updateUserStatus,
                                     status,
                                   }: ContentHeaderPT) => {

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={style.content}>
      <div className={style.item}>Title
        <div><img alt={'ava'} src={profile.photos.large || stockAva} /></div>
        <span>Status:</span>
        <ProfileStatusWithHooks status={status}
                                updateUserStatusThunkCreator={updateUserStatus} />
        <div>
          <div>about me: {profile.aboutMe}</div>
          <div>contacts: {profile.contacts['facebook']}</div>
          <div>lookingForAJob: {profile.lookingForAJob ? 'true' : 'false'}</div>
          <div>fullName: {profile.fullName}</div>
        </div>
      </div>
    </div>
  );
});