import * as React from 'react';

const style = require('./style.scss');

export interface AddVideoInputProps {
  onSubmit(id: string): void;
}

export interface AddVideoInputState {
  value: string;
}

export default class AddVideoInput extends React.Component<AddVideoInputProps, AddVideoInputState> {

  constructor(props: AddVideoInputProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  setValue = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: event.currentTarget.value,
    });
  }

  submitValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }  

  render() {
    return (
      <form onSubmit={this.submitValue} className={style.base}>
        <input type="text" onChange={this.setValue} className={style.input} />
        <input type="submit" className={style.button} />
      </form>
    );
  }

}
