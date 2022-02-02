import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator} from "../../../../../utils/validators/validators";
import {TextArea} from "../../../../comonComponents/FormsControls/FormsControl";


// let maxLength = maxLengthCreator(2)

export type PostsReduxFormType = {
    textPost: string
}

const PostsReduxForm = (props: InjectedFormProps<PostsReduxFormType>) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'}
                       name={'textPost'}
                       component={TextArea}
                       placeholder={'test'}
                    // validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const PostForm = reduxForm<PostsReduxFormType>({form: 'POST'})(PostsReduxForm)