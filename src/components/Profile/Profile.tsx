import React, { memo } from 'react';

import { ContentHeader } from './Content/Content_header/ContentHeader';
import { PostsContainer } from './Content/Posts/PostsContainer';

import style from 'components/Profile/Profile.module.scss';
import { ProfileDataType, ProfileType } from 'redux/profile_reducer';

export type ContentHeaderPT = {
  userId: string;
  savePhoto: (file: File) => void;
  profile: ProfileType;
  status: string;
  updateUserStatus: (status: string) => void;
  setProfileData: (
    data: ProfileDataType,
    userId: string,
    setEditMod: (value: boolean) => void,
  ) => void;
};

export const Profile = memo((props: ContentHeaderPT) => (
  <div className={style.main}>
    <ContentHeader
      profile={props.profile}
      savePhoto={props.savePhoto}
      userId={props.userId}
      status={props.status}
      setProfileData={props.setProfileData}
      updateUserStatus={props.updateUserStatus}
    />
    <PostsContainer />
  </div>
));
