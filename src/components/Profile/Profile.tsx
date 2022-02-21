import React, { memo } from 'react';
import { ContentHeader } from './Content/Content_header/ContentHeader';
import { PostsContainer } from './Content/Posts/PostsContainer';
import { ProfileDataType, ProfileType } from 'redux/profile_reducer';
import { Dispatch } from 'redux';

export type ContentHeaderPT = {
  userId: string
  savePhoto: (file: File) => void
  profile: ProfileType
  status: string
  updateUserStatus: (status: string) => void
  setProfileData: (data: ProfileDataType, userId: string) => (dispatch: Dispatch) => Promise<void>
}

export const Profile = memo((props: ContentHeaderPT) => {

  return (
    <div>
      <ContentHeader profile={props.profile}
                     savePhoto={props.savePhoto}
                     userId={props.userId}
                     status={props.status}
                     setProfileData={props.setProfileData}
                     updateUserStatus={props.updateUserStatus} />
      <PostsContainer />
    </div>
  );
});