import { ChangeEvent, memo, useEffect, useState } from 'react';

type ProfileStatusPT = {
  status: string;
  updateUserStatus: (status: string) => void;
};

export const ProfileStatusWithHooks = memo((props: ProfileStatusPT) => {
  const [editMod, setEditMod] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<string>(props.status);

  useEffect(() => {
    if (props.status === '') {
      setStatusText('default');
    } else {
      setStatusText(props.status);
    }
  }, [props.status]);

  const setEditModTrue = (): void => {
    setEditMod(true);
  };

  const setEditModFalse = (): void => {
    setEditMod(false);
    if (statusText) {
      props.updateUserStatus(statusText);
    }
  };
  const changeTextHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setStatusText(e.currentTarget.value);
  };

  if (editMod) {
    return (
      <div>
        <input
          onBlur={setEditModFalse}
          type="text"
          onChange={changeTextHandle}
          value={statusText}
        />
      </div>
    );
  }
  return (
    <div>
      <h2 onDoubleClick={setEditModTrue}>{props.status}</h2>
    </div>
  );
});
