import * as React from 'react';
import YouTube from 'react-youtube';
import * as R from 'ramda';

const getRandomFromList = (list: Array<string>) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

export interface PlayerProps {
  videos: Array<string>
}

class Player extends React.Component<PlayerProps, any> {
  constructor(props: PlayerProps) {
    super(props);
    this.state = {
      player: null,
      currentVideo: '2g811Eo7K8U',
    };

    this.onReady = this.onReady.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  onReady(event: React.SyntheticEvent<any>) {
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

export default Player;
