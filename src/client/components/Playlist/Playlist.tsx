import * as React from 'react';
import YoutubePlayer from '../YoutubePlayer';
import VideoInfo from '../VideoInfo';
import { getVideoInfo } from '../../api/youtube';
import { connect } from 'react-redux';
import { setVideo } from '../../actions';
import { StoreState } from '../../reducers';

const style = require('./style.scss');

const videos = [
  '1f9o0HF_iU4',
  '7QLSRMoKKS0',
  'TV7sbaffuNo',
  'otIabO9CL_I',
  '5dqBhFI8f7w',
];

export interface PlaylistProps {
  videos: YoutubeVideoInfo[];
  currentlyPlaying: string | null;
  setVideo(video: string): any;
}

class Playlist extends React.Component<PlaylistProps, {}> {
  render() {
    const videoInfos = 
      this.props.videos.map((info: any) => (
        <VideoInfo
          key={info.id}
          name={info.name}
          active={this.props.currentlyPlaying === info.id}
          thumbnail={info.thumbnail}
          onClick={() => this.props.setVideo(info.id)}
        />
      ));
  
    return (
      <div className={style.base}>
        <div className={style.sidebar}>
          {videoInfos}
        </div>
        <div className={style.player}>
          <YoutubePlayer />
        </div>
      </div>
    );
  }
}

const connectPage = connect(
    (state: StoreState) => ({
      videos: state.playlist.videos,
      currentlyPlaying: state.player.videoID,
    }),
    { setVideo },
);

export default connectPage(Playlist);