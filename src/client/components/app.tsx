import * as React from 'react';
import Player from './player';

const videos = [
  '7QLSRMoKKS0',
  'TV7sbaffuNo',
  'otIabO9CL_I',
  '5dqBhFI8f7w',
];

export interface AppProps {};

class App extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      videos,
    };

    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState({
      videos: ['PcmAg6-smKQ', ...this.state.videos],
    });
  }

  render() {
    return (
      <div>
        <Player videos={this.state.videos} />
        <a role="button" onClick={this.doAction}>Hello World!</a>
      </div>
    );
  }
}

export default App;
