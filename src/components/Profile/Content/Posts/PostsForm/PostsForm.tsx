import { ReactElement } from 'react';

import { useFormik } from 'formik';

export type PostsReduxFormType = {
  textPost: string;
};

type addNewPostHandleType = {
  addNewPostHandle: (data: PostsReduxFormType) => void;
};

export const PostForm = ({ addNewPostHandle }: addNewPostHandleType): ReactElement => {
  // const maxLength15 = useCallback(maxLengthCreator(MaxLengthSymbols.postForm), []);

  const formik = useFormik({
    initialValues: {
      textPost: '',
    },
    onSubmit: values => {
      addNewPostHandle(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="textPost"
          name="textPost"
          type="textPost"
          placeholder="some text"
          onChange={formik.handleChange}
          value={formik.values.textPost}
        />
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  );
};
