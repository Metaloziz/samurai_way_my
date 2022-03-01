import { ChangeEvent, Component, ReactElement } from 'react';

type ProfileStatusStateType = {
  editMode: boolean;
  status: string;
};

export class ProfileStatus extends Component<ProfileStatusPT, ProfileStatusStateType> {
  constructor(props: ProfileStatusPT) {
    super(props);
    const { status } = this.props;
    this.state = {
      editMode: false,
      status,
    };
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPT>): void {
    const { status } = this.props;

    if (prevProps.status !== status) {
      this.setState({ status });
    }
  }

  setEditModTrue = (): void => {
    this.setState({ editMode: true });
  };

  setEditModFalse(): void {
    const { props, state } = this;
    this.setState({ editMode: false });
    props.updateUserStatus(state.status.trim());
  }

  changeTextHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ status: e.currentTarget.value });
  };

  render(): ReactElement {
    const { state, setEditModTrue, changeTextHandle, setEditModFalse, props } = this;

    if (state.editMode) {
      return (
        <div>
          <input
            onBlur={setEditModFalse}
            type="text"
            onChange={changeTextHandle}
            value={state.status}
          />
        </div>
      );
    }
    return (
      <div>
        <h2 onDoubleClick={setEditModTrue}>{props.status}</h2>
      </div>
    );
  }
}

type ProfileStatusPT = {
  status: string;
  updateUserStatus: (status: string) => void;
};
