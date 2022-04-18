import { ReactElement } from 'react';

import { ProfileDataInfo } from 'components/Profile/Content/Content_header/ProfileDataInfo';
import { ProfileDataInfoForm } from 'components/Profile/Content/Content_header/ProfileDataInfoForm';
import { ProfileDataType } from 'redux/profile_reducer';

export const ProfileData = ({
  profileData,
  editMod,
  initialState,
}: {
  editMod: boolean;
  initialState: ProfileDataType & {
    userId: number;
    photos: { small: string; large: string };
  };
  profileData: (props: ProfileDataType) => void;
}): ReactElement => (
  <div>
    {editMod ? (
      <ProfileDataInfoForm initialState={initialState} setProfileData={profileData} />
    ) : (
      <ProfileDataInfo profile={initialState} />
    )}
  </div>
);
