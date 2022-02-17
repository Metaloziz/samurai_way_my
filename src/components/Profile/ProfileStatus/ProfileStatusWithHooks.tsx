import { ChangeEvent, memo, useState } from 'react';

type ProfileStatusPT = {
  status: string
  updateUserStatusThunkCreator: (status: string) => void
}

export const ProfileStatusWithHooks = memo((props: ProfileStatusPT) => {

  let [editMod, setEditMod] = useState<boolean>(false);
  let [statusText, setStatusText] = useState<string>(props.status);

  const setEditModTrue = () => {
    setEditMod(true);
  };

  const setEditModFalse = () => {
    setEditMod(false);
    props.updateUserStatusThunkCreator(statusText);
  };
  const changeTextHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusText(e.currentTarget.value);
  };

  if (editMod) {
    return <div><input onBlur={setEditModFalse}
                       autoFocus
                       type={'text'}
                       onChange={changeTextHandle}
                       value={statusText} /></div>;
  } else {
    return <div><h2 onDoubleClick={setEditModTrue}>{props.status}</h2></div>;
  }
});
