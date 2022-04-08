import { ComponentType, FC, ReactElement } from 'react';

import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import { DialogPT } from './DialogItem/DialogItem';
import { Messages } from './Messages';
import { MessagePT } from './MessagesItem/MessagesItem';

import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { addTextMessageAC } from 'redux/dialogs_reducer';
import { AppStatePT } from 'redux/store_redux';
import { selectDialogsPage } from 'utils/selectors/selectors';

const MessageFunctionalComponent: FC<
  mapStateToPropsMessageType & mapDispatchToPropsMessageType
> = ({ addNewMessage, dialogsPage }): ReactElement => (
  <Messages addNewMessage={addNewMessage} dialogsPage={dialogsPage} />
);
const mapStateToProps = (state: AppStatePT): mapStateToPropsMessageType => ({
  dialogsPage: selectDialogsPage(state),
  // isAuth: selectAuth(state), // add
});

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsMessageType => ({
  addNewMessage: (value: string) => dispatch(addTextMessageAC({ value })),
});

const MessagesContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(MessageFunctionalComponent);

export default MessagesContainer;

export type mapStateToPropsMessageType = {
  dialogsPage: dialogsItemsPT;
  // isAuth: boolean;
};

export type dialogsItemsPT = {
  dialogs: Array<DialogPT>;
  messages: Array<MessagePT>;
  // newText: string
};
export type mapDispatchToPropsMessageType = {
  addNewMessage: (value: string) => void;
  // changeText: (newText: string) => void
};
