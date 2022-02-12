import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";


export type  MessageReduxInputType = {
    message: string   // этот ключ не используется для отбора данных,
                    // имя поля берётся из name={'message'}
}


const MessageReduxInput = (props: InjectedFormProps<MessageReduxInputType>) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <Field type={'text'}
                   name={'message'}
                   component={'textarea'}
                   placeholder={'some text'}/>
            <button>Add</button>
        </form>
    );
};

export const AddMessageForm = reduxForm<MessageReduxInputType>({form: 'MESSAGE'})(MessageReduxInput)