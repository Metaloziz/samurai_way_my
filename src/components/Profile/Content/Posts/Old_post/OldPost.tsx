import React, { memo } from 'react';

import { Button } from 'components/comonComponents/Button/Button';
import style from 'components/Profile/Content/Posts/Old_post/Old_Post.module.scss';

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
        <Button name={`Like ${like}`} type="button" onClick={addLikeHandle} />
        <Button name={`Comment ${comment}`} type="button" />
      </div>
    </div>
  );
});
