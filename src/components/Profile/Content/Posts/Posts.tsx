import React, { memo, useCallback } from 'react';

import { OldPost } from './Old_post/OldPost';
import style from './Posts.module.css';
import { PostForm, PostsReduxFormType } from './PostsForm/PostsForm';

import { initialStateProfileType } from 'redux/profile_reducer';

export type NewPostPT = {
  profilePage: initialStateProfileType;
  addPostAC: (value: string) => void;
  addLikeAC: (postID: string) => void;
};

export const Posts = memo(({ profilePage, addPostAC, addLikeAC }: NewPostPT) => {
  const addNewItem = (data: PostsReduxFormType): void => {
    // eslint-disable-next-line no-console
    console.log(data);
    if (data.textPost) {
      // check empty
      addPostAC(data.textPost.trim());
    } else {
      // eslint-disable-next-line no-console
      console.warn('field is empty');
    }
  };

  const addLikeHandle = useCallback((postID: string) => {
    addLikeAC(postID);
  }, []);

  return (
    <div className={style.content}>
      <div className={style.item}>
        New Post
        {/* when submit form — call addNewItem  */}
        <PostForm onSubmit={addNewItem} />
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
