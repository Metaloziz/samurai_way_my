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
  ProfileDataInfoForm, ProfileDataInfoFormPT,
} from 'components/Profile/Content/Content_header/ProfileDataInfoForm';

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

  const setProfileDataCB = (props: ProfileDataInfoFormPT) => {
    setEditMod(false);
    setProfileData({
      AboutMe: props.profile.aboutMe,
      lookingForAJobDescription: props.profile.lookingForAJobDescription,
      fullName: props.profile.fullName,
      lookingForAJob: true,
      contacts: {
        ...props.profile.contacts,
      },
    });
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
          ? <ProfileDataInfoForm onSubmit={setProfileDataCB} />
          : <ProfileDataInfo profile={profile} />
        }

      </div>
    </div>
  );
});

