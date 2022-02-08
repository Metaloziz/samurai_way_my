import React, { ReactElement } from 'react';

import { ProfileType } from '../../redux_my/profile_reducer';

import { ContentHeader } from './Content/Content_header/ContentHeader';
import { PostsContainer } from './Content/Posts/PostsContainer';

export type ContentHeaderPT = {
  profile: ProfileType;
  status: string;
  updateUserStatusThunkCreator: (status: string) => void;
};

export const Profile = ({
  profile,
  updateUserStatusThunkCreator,
  status,
}: ContentHeaderPT): ReactElement => (
  <div>
    <ContentHeader
      profile={profile}
      status={status}
      updateUserStatusThunkCreator={updateUserStatusThunkCreator}
    />
    <PostsContainer />
  </div>
);
