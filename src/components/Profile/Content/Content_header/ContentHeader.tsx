import React, { ChangeEvent, memo, useState } from 'react';
import style from './Content_header.module.css';
import { ContentHeaderPT } from '../../Profile';
import { Preloader } from '../../../comonComponents/Preloader';
import {
  ProfileStatusWithHooks,
} from 'components/Profile/ProfileStatus/ProfileStatusWithHooks';
import stockAva from '../../../Users/imgAva/user.png';
import {
  ProfileDataInfo,
} from 'components/Profile/Content/Content_header/ProfileDataInfo';
import { AvatarImage } from 'components/Profile/Content/Content_header/AvatarImage';
import {
  ProfileDataInfoForm,
} from 'components/Profile/Content/Content_header/ProfileDataInfoForm';
import { ProfileDataType } from 'redux/profile_reducer';

export const ContentHeader = memo(({
                                     profile,
                                     updateUserStatus,
                                     status, userId, savePhoto, setProfileData,
                                   }: ContentHeaderPT) => {

  let [editMod, setEditMod] = useState<boolean>(false);

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  const setEditModHandle = () => {
    setEditMod(!editMod);
  };

  const setProfileDataCB = (props: ProfileDataType) => {
    setProfileData(props, `${profile.userId}`, setEditMod);
    console.log(props);
  };

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={style.content}>
      <div className={style.item}>Title
        <div><img alt={'ava'} src={profile.photos.large || stockAva} /></div>
        <AvatarImage userId={userId} onChange={onMainPhotoSelected} />
        <div><span>Status:</span></div>
        <ProfileStatusWithHooks status={status}
                                updateUserStatus={updateUserStatus} />
        {!userId && <button onClick={setEditModHandle}>change editMod</button>}
        {editMod
          ? <ProfileDataInfoForm initialValues={profile} onSubmit={setProfileDataCB} />
          : <ProfileDataInfo profile={profile} />
        }
      </div>
    </div>
  );
});

