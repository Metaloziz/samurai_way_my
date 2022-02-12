import React from 'react';
import style from './Posts.module.css';
import { OldPost } from './Old_post/OldPost';
import { initialStateProfileType } from 'redux/profile_reducer';
import { PostForm, PostsReduxFormType } from './PostsForm/PostsForm';

export type NewPostPT = {
  profilePage: initialStateProfileType
  addPostAC: (value: string) => void
  addLikeAC: (postID: string) => void
}

export const Posts = ({ profilePage, addPostAC, addLikeAC }: NewPostPT) => {

  const addNewItem = (data: PostsReduxFormType) => {
    console.log(data);
    if (data.textPost) {              // check empty
      addPostAC(data.textPost.trim());
    } else {
      console.warn('field is empty');
    }
  };

  return (
    <div className={style.content}>
      <div className={style.item}>
        New Post
        {/* when submit form — call addNewItem  */}
        <PostForm onSubmit={addNewItem} />
        {profilePage.postData.map((item) =>
          <OldPost addLike={() => addLikeAC(item.id)}
                   key={item.id} message={item.message}
                   like={item.like}
                   comment={item.comment} />)}

      </div>
    </div>
  );
};
