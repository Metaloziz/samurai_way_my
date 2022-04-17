import { ChangeEvent, FC, ReactElement, useState } from 'react';

import { Preloader } from '../../../comonComponents/Preloader';
import stockAva from '../../../Users/imgAva/user.png';
import { ContentHeaderPT } from '../../Profile';

import { Button } from 'components/comonComponents/ButtonNew/Button';
import { AvatarImage } from 'components/Profile/Content/Content_header/AvatarImage';
import style from 'components/Profile/Content/Content_header/Content_header.module.scss';
import { ProfileDataInfo } from 'components/Profile/Content/Content_header/ProfileDataInfo';
import { ProfileDataInfoForm } from 'components/Profile/Content/Content_header/ProfileDataInfoForm';
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
}): ReactElement => {
  const [editMod, setEditMod] = useState<boolean>(false);

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      savePhoto(e.target.files[CommonConstants.zero]);
    }
  };

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
      <div className={style.item}>
        <span>Profile</span>
        <div>
          <img alt="ava" src={profile.photos.large || stockAva} />
        </div>
        <AvatarImage userId={userId} onChangeHandler={onMainPhotoSelected} />
        <div>
          <span>Status:</span>
        </div>
        <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
        {!userId && (
          <Button name="edit data" disabled={editMod} onClick={setEditModHandle} />
        )}
        {editMod ? (
          <ProfileDataInfoForm initialState={profile} setProfileData={setProfileDataCB} />
        ) : (
          <ProfileDataInfo profile={profile} />
        )}
      </div>
    </div>
  );
};
