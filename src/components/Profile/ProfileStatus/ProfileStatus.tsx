import React, {ChangeEvent} from 'react';

type ProfileStatusPT = {
    value: string
}

export class ProfileStatus extends React.Component<ProfileStatusPT> {

    state = {
        editMode: false,
        value: 'your status'
    }

    setEditMod = () => {

        this.setState({
                editMode: !this.state.editMode
            }
        )
    };

    changeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        this.setState({
                value: e.currentTarget.value
            }
        )
    }

    render() {

        return (
            <>
                {
                    this.state.editMode
                        ? <div><input
                            onBlur={this.setEditMod}
                            autoFocus
                            type={"text"}
                            onChange={this.changeCallBack}
                            // defaultValue={"status"}
                            value={this.props.value}/></div>
                        : <div><h2 onDoubleClick={this.setEditMod}>{this.props.value}</h2></div>
                }
            </>
        );
    }
}
