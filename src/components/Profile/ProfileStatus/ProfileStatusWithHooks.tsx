import { ChangeEvent, FC, memo, useEffect, useState } from 'react';

type ProfileStatusPT = {
  status: string;
  updateUserStatus: (status: string) => void;
};

export const ProfileStatusWithHooks: FC<ProfileStatusPT> = memo(
  ({ status, updateUserStatus }) => {
    const defaultStatus = status || 'default';

    const [editMod, setEditMod] = useState<boolean>(false);
    const [statusText, setStatusText] = useState<string>(defaultStatus);

    useEffect(() => {
      if (status === '') {
        setStatusText('default');
      } else {
        setStatusText(status);
      }
    }, [status]);

    const setEditModTrue = (): void => {
      setEditMod(true);
    };

    const setEditModFalse = (): void => {
      setEditMod(false);
      if (statusText) {
        updateUserStatus(statusText);
      }
    };
    const changeTextHandle = (e: ChangeEvent<HTMLInputElement>): void => {
      setStatusText(e.currentTarget.value);
    };

    return (
      <div>
        <div>
          Status:
          {editMod ? (
            <input
              maxLength={20}
              onBlur={setEditModFalse}
              type="text"
              onChange={changeTextHandle}
              value={statusText}
            />
          ) : (
            <h4 onDoubleClick={setEditModTrue}>{defaultStatus}</h4>
          )}
          <div>double click - change it</div>
        </div>
      </div>
    );
  },
);
