import { memo, useCallback } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { MaxLengthSymbols } from 'utils/enum/enum';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';

// let maxLength = maxLengthCreator(2)

export type PostsReduxFormType = {
  textPost: string;
};

const PostsReduxForm = memo((props: InjectedFormProps<PostsReduxFormType>) => {
  const maxLength15 = useCallback(maxLengthCreator(MaxLengthSymbols.postForm), []);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          name="textPost"
          typeComponent="textarea"
          component={Input}
          placeholder="test"
          validate={[requiredField, maxLength15]}
        />
      </div>
      <div>
        <button type="button">Add post</button>
      </div>
    </form>
  );
});

export const PostForm = reduxForm<PostsReduxFormType>({ form: 'POST' })(PostsReduxForm);
