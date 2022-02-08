import { Component, ComponentType, ReactElement } from 'react';

import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addTextMessageAC } from '../../redux_my/dialogs_reducer';
import { AppStatePT } from '../../redux_my/store_redux';

import { DialogPT } from './DialogItem/DialogItem';
import { Messages } from './Messages';
import { MessagePT } from './MessagesItem/MessagesItem';

export type mapStateToPropsMessageType = {
  dialogsPage: dialogsItemsPT;
  isAuth: boolean;
};
export type mapDispatchToPropsMessageType = {
  addNewMessage: (value: string) => void;
};
export type dialogsItemsPT = {
  dialogs: Array<DialogPT>;
  messages: Array<MessagePT>;
};

class MessagesClassComponent extends Component<
  mapStateToPropsMessageType & mapDispatchToPropsMessageType
> {
  // eslint-disable-next-line class-methods-use-this
  onSubmit = (data: any): void => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  render(): ReactElement {
    const { addNewMessage, dialogsPage } = this.props;

    return <Messages addNewMessage={addNewMessage} dialogsPage={dialogsPage} />;
  }
}

const mapStateToProps = (state: AppStatePT): mapStateToPropsMessageType => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.auth.isAuth, // add
});

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsMessageType => ({
  addNewMessage: (value: string) => dispatch(addTextMessageAC(value)),
});

// let connectComponent = withAuthRedirect(MessagesClassComponent) // withAuthRedirect проверяет на авторизацию

export const MessagesContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(MessagesClassComponent);
