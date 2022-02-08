import { ReactElement } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { TextArea } from '../../../../comonComponents/FormsControls/FormsControl';

// let maxLength = maxLengthCreator(2)

export type PostsReduxFormType = {
  textPost: string;
};

const PostsReduxForm = ({
  handleSubmit,
}: InjectedFormProps<PostsReduxFormType>): ReactElement => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        type="text"
        name="textPost"
        component={TextArea}
        placeholder="test"
        // validate={[requiredField, maxLength]}
      />
    </div>
    <div>
      <button type="button">Add post</button>
    </div>
  </form>
);

export const PostForm = reduxForm<PostsReduxFormType>({ form: 'POST' })(PostsReduxForm);
