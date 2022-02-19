import React, { memo } from 'react';
import { ContentHeader } from './Content/Content_header/ContentHeader';
import { PostsContainer } from './Content/Posts/PostsContainer';
import { ProfileType } from 'redux/profile_reducer';

export type ContentHeaderPT = {
  profile: ProfileType
  status: string
  updateUserStatus: (status: string) => void
}

export const Profile = memo((props: ContentHeaderPT) => {

  return (
    <div>
      <ContentHeader profile={props.profile}
                     status={props.status}
                     updateUserStatus={props.updateUserStatus} />
      <PostsContainer />
    </div>
  );
});