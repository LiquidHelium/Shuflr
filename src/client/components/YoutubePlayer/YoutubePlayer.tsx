import * as React from 'react';
import YouTube from 'react-youtube';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { playVideo, pauseVideo, loadNextVideo } from '../../actions';

export interface PlayerProps {
  id: string;
  playing: boolean;
  playVideo(): any;
  pauseVideo(): any;
  loadNextVideo(): any;
}

class YoutubePlayer extends React.Component<PlayerProps, any> {
  constructor() {
    super();
    this.state = { player: null };
  }
  
  componentWillReceiveProps(nextProps: PlayerProps) {
    if (!this.state.player) return;

    if (this.props.id !== nextProps.id) {
      this.state.player.loadVideoById(nextProps.id);
    }
    if (this.props.playing !== nextProps.playing) {
      this.setPlayingState(this.state.player, nextProps.playing);
    }
  }

  onReady = (event: any) => {
    const player = event.target;
    this.setState({ player });
    player.loadVideoById(this.props.id, 0, 'large');
    this.setPlayingState(player, this.props.playing);
  }

  onStateChange = (event: any) => {
    const state = event.data;
    switch (state) {
      default:
      case -1:
      case 3:
      case 5:
        return;

      case 0:
        return this.props.loadNextVideo();

      case 1:
        return this.props.playVideo();
      
      case 2:
        return this.props.pauseVideo();
    }
  }

  setPlayingState = (player: any, playing: boolean) => {
    if (playing) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }



  render() {
    return (
      <div>
        <YouTube onReady={this.onReady} onStateChange={this.onStateChange} />
      </div>
    );
  }
}

export default connect(
  (state: StoreState) => ({ id: state.player.videoID, playing: state.player.playing }),
  { playVideo, pauseVideo, loadNextVideo },
)(YoutubePlayer);
