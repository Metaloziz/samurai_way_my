import React, { memo } from 'react';

import style from './Old_Post.module.css';

import { Button } from 'components/comonComponents/ButtonNew/Button';

type OldPostPT = {
  id: string;
  message: string;
  like: number;
  comment: number;
  addLike: (postID: string) => void;
};

export const OldPost = memo(({ message, like, comment, addLike, id }: OldPostPT) => {
  const addLikeHandle = (): void => addLike(id);

  return (
    <div className={style.content}>
      <div className={style.items}>
        <img
          alt="@"
          className={style.avatar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1UqsPpKa_ipIT3XjQpWpH5mm6ZiBlEpvzw&usqp=CAU"
        />
        <span className={style.item}>{message}</span>
      </div>
      <div className={style.contentButtons}>
        <Button name="Like" type="button" onClick={addLikeHandle} />
        <span>{like}</span>
        <Button name="Comment" type="button" />
        <span>{comment}</span>
      </div>
    </div>
  );
});
