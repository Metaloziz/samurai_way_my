import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";


export type PostsReduxFormType = {
    textPost: string
}


const PostsReduxForm = (props: InjectedFormProps<PostsReduxFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'} name={'textPost'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const PostForm = reduxForm<PostsReduxFormType>({form: 'POST'})(PostsReduxForm)