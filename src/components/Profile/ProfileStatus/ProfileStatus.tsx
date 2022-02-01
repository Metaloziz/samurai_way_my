import React, {ChangeEvent} from 'react';

type ProfileStatusPT = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPT> {

    state = {
        editMode: false,
        value: this.props.status
    }

    setEditMod = () => {
        this.setState({
                editMode: !this.state.editMode
            }
        )
    };

    changeCallBack = (e: ChangeEvent<HTMLInputElement>) => {  // изменяет н
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
                            value={this.state.value}/></div>
                        : <div><h2 onDoubleClick={this.setEditMod}>{this.state.value}</h2></div>
                }
            </>
        );
    }
}
