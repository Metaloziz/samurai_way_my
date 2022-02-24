import { ContactsType, ProfileType } from 'redux/profile_reducer';
import style from 'components/Profile/Content/Content_header/Content_header.module.css';

export const ProfileDataInfo = (props: { profile: ProfileType }) => {

  let arr = Object.keys(props.profile.contacts) as Array<keyof ContactsType>;

  return (
    <div>
      <div>
        <div><b>lookingForAJob:</b> {`${props.profile.lookingForAJob}`}</div>
        <div>
          <b>lookingForAJobDescription:</b> {`${props.profile.lookingForAJobDescription}`}
        </div>
        <div><b>fullName:</b> {props.profile.fullName}</div>
        <div><b>about me:</b> {props.profile.aboutMe}</div>
        <b>Contacts:</b>
      </div>
      <div className={style.contacts}>
        {arr.map((el) => <div key={el}><b>{el}:</b> {props.profile.contacts[el]}</div>)}
      </div>
    </div>
  );
};