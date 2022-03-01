import { ChangeEvent, memo, useState } from 'react';

import { Preloader } from '../../../comonComponents/Preloader';
import stockAva from '../../../Users/imgAva/user.png';
import { ContentHeaderPT } from '../../Profile';

import style from './Content_header.module.css';

import { Button } from 'components/comonComponents/Button/Button';
import { AvatarImage } from 'components/Profile/Content/Content_header/AvatarImage';
import { ProfileDataInfo } from 'components/Profile/Content/Content_header/ProfileDataInfo';
import { ProfileDataInfoForm } from 'components/Profile/Content/Content_header/ProfileDataInfoForm';
import { ProfileStatusWithHooks } from 'components/Profile/ProfileStatus/ProfileStatusWithHooks';
import { ProfileDataType } from 'redux/profile_reducer';
import { CommonConstants } from 'utils/enum/enum';

export const ContentHeader = memo(
  ({
    profile,
    updateUserStatus,
    status,
    userId,
    savePhoto,
    setProfileData,
  }: ContentHeaderPT) => {
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
      // eslint-disable-next-line no-console
      console.log(props);
    };

    if (!profile) {
      return <Preloader />;
    }

    return (
      <div className={style.content}>
        <div className={style.item}>
          <span>Title</span>
          <div>
            <img alt="ava" src={profile.photos.large || stockAva} />
          </div>
          <AvatarImage userId={userId} onChangeHandler={onMainPhotoSelected} />
          <div>
            <span>Status:</span>
          </div>
          <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
          {!userId && (
            <Button title=" change editMod" onClickHandler={setEditModHandle} />
          )}
          {editMod ? (
            <ProfileDataInfoForm initialValues={profile} onSubmit={setProfileDataCB} />
          ) : (
            <ProfileDataInfo profile={profile} />
          )}
        </div>
      </div>
    );
  },
);
