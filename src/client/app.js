import React from 'react';
import YouTube from 'react-youtube';
import R from 'ramda';

const videos = [
  '7QLSRMoKKS0',
  'TV7sbaffuNo',
  'otIabO9CL_I',
  '5dqBhFI8f7w',
];

const getRandomFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      currentVideo: '2g811Eo7K8U',
    };

    this.onReady = this.onReady.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  doAction() {
    const otherVideos = R.without([this.state.currentVideo], this.props.videos);
    const randomVideo = getRandomFromList(otherVideos);
    this.state.player.loadVideoById(randomVideo);
    this.setState({
      currentVideo: randomVideo,
    });
  }

  render() {
    return (
      <div>
        <div>
          <YouTube videoId="2g811Eo7K8U" onReady={this.onReady} />
        </div>
        <a role="button" onClick={this.doAction}>Hello World!</a>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
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
        <Video videos={this.state.videos} />
        <a role="button" onClick={this.doAction}>Hello World!</a>
      </div>
    );
  }
}

export default App;
