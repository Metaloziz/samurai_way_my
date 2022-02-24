import { ProfileType } from 'redux/profile_reducer';

export function ProfileData(props: { profile: ProfileType }) {
  return <div>
    <div><b>about me:</b> {props.profile.aboutMe}</div>
    <div><b>lookingForAJob:</b> {`${props.profile.lookingForAJob}`}</div>
    <div><b>fullName:</b> {props.profile.fullName}</div>
  </div>;
}