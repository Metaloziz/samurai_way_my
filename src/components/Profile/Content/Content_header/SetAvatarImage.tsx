import React, { FC, memo, ReactElement } from 'react';

import style from './SetAvatarImage.module.scss';

type AvatarImageType = {
  userId: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SetAvatarImage: FC<AvatarImageType> = memo(
  ({ userId, onChangeHandler }): ReactElement => (
    <div>
      {!userId && (
        <div>
          <label htmlFor="set-file" className={style.item}>
            <input id="set-file" type="file" onChange={onChangeHandler} />
          </label>
        </div>
      )}
    </div>
  ),
);
