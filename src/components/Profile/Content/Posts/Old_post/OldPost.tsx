import React, { memo } from 'react';
import style from './Old_Post.module.css';

type OldPostPT = {
  id: string
  message: string
  like: number
  comment: number
  addLike: (postID: string) => void
}

export const OldPost = memo(({ message, like, comment, addLike, id }: OldPostPT) => {
  console.log('old');
  let addLikeHandle = () => addLike(id);

  return (
    <div className={style.content}>
      <div className={style.items}>
        <img alt={'@'} className={style.avatar}
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1UqsPpKa_ipIT3XjQpWpH5mm6ZiBlEpvzw&usqp=CAU' />
        <span className={style.item}>{message}</span></div>
      <div className={style.contentButtons}>
        <button onClick={addLikeHandle}>Like</button>
        <span>{like}</span>
        <button>Comment</button>
        <span>{comment}</span>
      </div>
    </div>
  );
});