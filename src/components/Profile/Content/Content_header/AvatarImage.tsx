import React, { FC, ReactElement } from 'react';

type AvatarImageType = {
  userId: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AvatarImage: FC<AvatarImageType> = ({
  userId,
  onChangeHandler,
}): ReactElement => (
  <div>{!userId && <input type="file" onChange={onChangeHandler} />}</div>
);
