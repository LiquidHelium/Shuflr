import * as React from 'react';
import { connect } from 'react-redux';
import { loadPlaylist } from '../../actions';
import { getVideoInfo } from '../../api/youtube';
import { getPlaylist } from '../../api/playlist';

import Playlist from '../Playlist';

export interface PlaylistPageProps {
  id: string;
  loadPlaylist(id: string): any;
}

class PlaylistPage extends React.Component<PlaylistPageProps, {}> {
  async componentDidMount() {
    this.loadPlaylist();
  }

  async componentWillReceiveProps(nextProps: PlaylistPageProps) {
    if (this.props.id !== nextProps.id) {
      this.loadPlaylist();
    }
  }

  async loadPlaylist() {
    this.props.loadPlaylist(this.props.id);
  }

  render() {
    return <Playlist />;
  }
}

const connectPage = connect(
  null,
  { loadPlaylist },
);

export default connectPage(PlaylistPage);
