import { ReactElement } from 'react';

import { initialStateProfileType } from '../../../../redux_my/profile_reducer';

import { OldPost } from './Old_post/OldPost';
import style from './Posts.module.css';
import { PostForm, PostsReduxFormType } from './PostsForm/PostsForm';

export type NewPostPT = {
  profilePage: initialStateProfileType;
  addPostAC: (value: string) => void;
  addLikeAC: (postID: string) => void;
};

export const Posts = ({ profilePage, addPostAC, addLikeAC }: NewPostPT): ReactElement => {
  const addNewItem = (data: PostsReduxFormType): void => {
    if (data.textPost) {
      // check empty
      addPostAC(data.textPost.trim());
    } else {
      // eslint-disable-next-line no-console
      console.warn('field is empty');
    }
  };

  return (
    <div className={style.content}>
      <div className={style.item}>
        New Post
        <PostForm onSubmit={addNewItem} />
        {profilePage.postData.map(item => (
          <OldPost
            addLike={() => addLikeAC(item.id)}
            key={item.id}
            message={item.message}
            like={item.like}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};
