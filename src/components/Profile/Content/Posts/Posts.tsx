import React, { memo, useCallback } from 'react';

import { OldPost } from './Old_post/OldPost';
import style from './Posts.module.css';
import { PostForm, PostsReduxFormType } from './PostsForm/PostsForm';

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
      <div className={style.item}>
        New Post
        <PostForm addNewPostHandle={addNewItem} />
        {profilePage.postData.map(item => (
          <OldPost
            key={item.id}
            id={item.id}
            addLike={addLikeHandle}
            message={item.message}
            like={item.like}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
});
