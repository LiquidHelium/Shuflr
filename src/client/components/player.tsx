import * as React from 'react';
import YouTube from 'react-youtube';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { setupPlayer, teardownPlayer } from '../actions';

const getRandomFromList = (list: string[]) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

export interface PlayerProps {
  setupPlayer(player: any): any;
  teardownPlayer(): any;
}

class Player extends React.Component<PlayerProps, any> {
  constructor(props: PlayerProps) {
    super(props);
    this.onReady = this.onReady.bind(this);
  }

  componentWillUnmount() {
    this.props.teardownPlayer();
  }

  onReady(event: React.SyntheticEvent<any>) {
    this.props.setupPlayer(event.target);
  }

  render() {
    return (
      <div>
        <YouTube onReady={this.onReady} />
      </div>
    );
  }
}

export default connect(null, { setupPlayer, teardownPlayer })(Player);
