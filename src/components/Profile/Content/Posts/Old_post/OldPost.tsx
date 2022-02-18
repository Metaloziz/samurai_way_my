import React, { memo } from 'react';
import style from './Old_Post.module.css';

type OldPostPT = {
  message: string
  like: number
  comment: number
  addLike: () => void
}

export const OldPost = memo(({ message, like, comment, addLike }: OldPostPT) => {

  return (
    <div className={style.content}>
      <div className={style.items}>
        <img alt={'@'} className={style.avatar}
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1UqsPpKa_ipIT3XjQpWpH5mm6ZiBlEpvzw&usqp=CAU' />
        <span className={style.item}>{message}</span></div>
      <div className={style.contentButtons}>
        <button onClick={() => addLike()}>Like</button>
        <span>{like} </span>
        <button>Comment</button>
        <span>{comment}</span>
      </div>
    </div>
  );
});