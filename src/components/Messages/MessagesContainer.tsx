import { addTextMessageAC } from 'redux/dialogs_reducer';
import { Messages } from './Messages';
import { connect } from 'react-redux';
import { AppStatePT } from 'redux/store_redux';
import { compose, Dispatch } from 'redux';
import { DialogPT } from './DialogItem/DialogItem';
import { MessagePT } from './MessagesItem/MessagesItem';
import { Component, ComponentType } from 'react';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { selectAuth, selectDialogsPage } from 'utils/selectors/selectors';

export type mapStateToPropsMessageType = {
  dialogsPage: dialogsItemsPT
  isAuth: boolean
};

export type dialogsItemsPT = {
  dialogs: Array<DialogPT>
  messages: Array<MessagePT>
  // newText: string
}
export type mapDispatchToPropsMessageType = {
  addNewMessage: (value: string) => void
  // changeText: (newText: string) => void
};

class MessagesClassComponent extends Component<mapStateToPropsMessageType & mapDispatchToPropsMessageType> {

  render() {

    let { addNewMessage, dialogsPage } = this.props;

    return <Messages addNewMessage={addNewMessage}
                     dialogsPage={dialogsPage} />;
  }
}

const mapStateToProps = (state: AppStatePT): mapStateToPropsMessageType => {
  return {
    dialogsPage: selectDialogsPage(state),
    isAuth: selectAuth(state), // add
  };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsMessageType => {
  return {
    addNewMessage: (value: string) => dispatch(addTextMessageAC(value)),
    // changeText: (newText: string) => dispatch(updateTextMessageAC(newText))
  };
};

// let connectComponent = withAuthRedirect(MessagesClassComponent) // withAuthRedirect проверяет на авторизацию

const MessagesContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(MessagesClassComponent);

export default MessagesContainer;
