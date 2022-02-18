import { ChangeEvent, Component } from 'react';

type ProfileStatusPT = {
  status: string
  updateUserStatusThunkCreator: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusPT> {

  state = {
    editMode: false,
    status: this.props.status,
  };

  setEditModTrue = () => {
    this.setState({ editMode: true });
  };

  setEditModFalse = () => {
    this.setState({ editMode: false });
    this.props.updateUserStatusThunkCreator(this.state.status.trim());
  };

  changeTextHandle = (e: ChangeEvent<HTMLInputElement>) => {  // изменяет н
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(prevProps: any, presState: any) { // предыдущие и следующие пропсы

    if (prevProps ! === this.props.status) {  // мы не можем использовать здесь хуки
      this.setState({ status: this.props.status });
    }
  }

  render() {

    return (
      <>
        {
          this.state.editMode
            ? <div><input
              onBlur={this.setEditModFalse}
              autoFocus
              type={'text'}
              onChange={this.changeTextHandle}
              // defaultValue={this.state.status}
              value={this.state.status} /></div>
            : <div>
              <h2 onDoubleClick={this.setEditModTrue}>{this.props.status}</h2>
            </div>
        }
      </>
    );
  }
}
