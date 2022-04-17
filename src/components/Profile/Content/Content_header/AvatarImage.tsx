import React, { FC, ReactElement } from 'react';

import style from './AvatarImage.module.scss';

type AvatarImageType = {
  userId: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AvatarImage: FC<AvatarImageType> = ({
  userId,
  onChangeHandler,
}): ReactElement => (
  <div>
    {!userId && (
      <div>
        <label htmlFor="set-file" className={style.item}>
          <input id="set-file" type="file" onChange={onChangeHandler} />
        </label>
      </div>
    )}
  </div>
);
