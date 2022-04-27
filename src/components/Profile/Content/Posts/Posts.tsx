import React, { memo, useCallback } from 'react';

import { OldPost } from './Old_post/OldPost';
import { PostForm, PostsReduxFormType } from './PostsForm/PostsForm';

import style from 'components/Profile/Content/Posts/Posts.module.scss';
import { initialStateProfileType } from 'redux/profile_reducer';

export type NewPostPT = {
  profilePage: initialStateProfileType;
  addPostAC: (value: { value: string }) => void;
  addLikeAC: (value: { postID: string }) => void;
};

export const Posts = memo(({ profilePage, addPostAC, addLikeAC }: NewPostPT) => {
  const addNewItem = (data: PostsReduxFormType): void => {
    if (data.textPost) {
      addPostAC({ value: data.textPost.trim() });
    }
  };

  const addLikeHandle = useCallback((postID: string) => {
    addLikeAC({ postID });
  }, []);

  return (
    <div className={style.content}>
      <PostForm addNewPostHandle={addNewItem} />
      {profilePage.postData.map(({ id, like, comment, message }) => (
        <OldPost
          key={id}
          id={id}
          addLike={addLikeHandle}
          message={message}
          like={like}
          comment={comment}
        />
      ))}
    </div>
  );
});
