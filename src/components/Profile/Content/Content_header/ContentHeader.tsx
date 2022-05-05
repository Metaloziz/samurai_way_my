import { ChangeEvent, FC, useCallback, useState } from 'react';

import stockAva from '../../../Users/imgAva/user.png';
import { ContentHeaderPT } from '../../Profile';

import { Button } from 'components/comonComponents/Button/Button';
import { Preloader } from 'components/comonComponents/Preloader';
import style from 'components/Profile/Content/Content_header/Content_header.module.scss';
import { ProfileData } from 'components/Profile/Content/Content_header/ProfileData/ProfileData';
import { SetAvatarImage } from 'components/Profile/Content/Content_header/SetAvatarImage';
import { ProfileStatusWithHooks } from 'components/Profile/ProfileStatus/ProfileStatusWithHooks';
import { ProfileDataType } from 'redux/profile_reducer';
import { CommonConstants } from 'utils/enum/enum';

export const ContentHeader: FC<ContentHeaderPT> = ({
  profile,
  updateUserStatus,
  status,
  userId,
  savePhoto,
  setProfileData,
}) => {
  const [editMod, setEditMod] = useState<boolean>(false);

  const onMainPhotoSelected = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      savePhoto(e.target.files[CommonConstants.zero]);
    }
  }, []);

  const setEditModHandle = (): void => {
    setEditMod(!editMod);
  };

  const setProfileDataCB = (props: ProfileDataType): void => {
    setProfileData(props, `${profile.userId}`, setEditMod);
  };

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={style.content}>
      <div className={style.avatar}>
        <div>
          <img alt="ava" src={profile.photos.large || stockAva} />
          <SetAvatarImage userId={userId} onChangeHandler={onMainPhotoSelected} />
        </div>
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
      </div>
      <div className={style.contacts}>
        {!userId && (
          <Button name="edit data" disabled={editMod} onClick={setEditModHandle} />
        )}
        <ProfileData
          editMod={editMod}
          initialState={profile}
          profileData={setProfileDataCB}
        />
      </div>
    </div>
  );
};
