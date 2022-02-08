import React, { ChangeEvent, ReactElement } from 'react';

type ProfileStatusPT = {
  status: string;
  updateUserStatusThunkCreator: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusPT> {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    editMode: false,
    // eslint-disable-next-line react/destructuring-assignment
    status: this.props.status,
  };

  componentDidUpdate(prevProps: any): void {
    const { status } = this.props;

    if (prevProps! === status) {
      // мы не можем использовать здесь хуки

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        status,
      });
    }
  }

  setEditModTrue = (): void => {
    this.setState({
      editMode: true,
    });
  };

  setEditModFalse = (): void => {
    this.setState({
      editMode: false,
    });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateUserStatusThunkCreator(this.state.status.trim());
  };

  changeCallBack = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      status: e.currentTarget.value.trim(),
    });
  };

  render(): ReactElement {
    const { editMode, status } = this.state;

    if (editMode) {
      return (
        <div>
          <input
            onBlur={this.setEditModFalse}
            // autoFocus
            type="text"
            onChange={this.changeCallBack}
            // defaultValue={this.state.status}
            value={status}
          />
        </div>
      );
    }
    return (
      <div>
        <h2 onDoubleClick={this.setEditModTrue}>{status}</h2>
      </div>
    );
  }
}
