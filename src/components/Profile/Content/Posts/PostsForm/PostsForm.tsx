import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import React, { memo, useCallback } from 'react';
import { Input } from 'components/comonComponents/FormsControls/FormsControl';
import { maxLengthCreator, requiredField } from 'utils/validators/validators';

// let maxLength = maxLengthCreator(2)

export type PostsReduxFormType = {
  textPost: string
}

const PostsReduxForm = memo((props: InjectedFormProps<PostsReduxFormType>) => {

  let maxLength15 = useCallback(maxLengthCreator(15), [15]);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type={'text'}
               name={'textPost'}
               typeComponent={'textarea'}
               component={Input}
               placeholder={'test'}
               validate={[requiredField, maxLength15]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
});

export const PostForm = reduxForm<PostsReduxFormType>({ form: 'POST' })(PostsReduxForm);