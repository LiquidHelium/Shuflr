import * as React from 'react';
import YoutubePlayer from '../YoutubePlayer';
import AddVideoInput from '../AddVideoInput';
import VideoInfo from '../VideoInfo';
import { getVideoInfo } from '../../api/youtube';
import { connect } from 'react-redux';
import { setVideo, loadVideo, savePlaylist } from '../../actions';
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
  loadVideo(video: string): any;
  savePlaylist(): any;
}

class Playlist extends React.Component<PlaylistProps, {}> {

  addVideo(video: String) {
    console.log(video);
  }

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

    if (this.props.videos.length ===  0 || this.props.currentlyPlaying === null) {
      return (
        <div className={style.loading}>
          <i className="fas fa-spinner fa-spin" />
        </div>
      );
    }
  
    return (
      <div className={style.base}>
        <div className={style.header}>
          <h1>Shuflr</h1>
        </div>
        <div className={style.centeredContent}>
          <div className={style.player}>
            <YoutubePlayer />
          </div>
          <div className={style.titleContainer}>
            <h1>{getCurrentlyPlayingName(this.props.videos, this.props.currentlyPlaying)}</h1>
          </div>
          <div className={style.addVideoContainer}>
            <AddVideoInput onSubmit={this.props.loadVideo} />
            <button onClick={this.props.savePlaylist}>Save</button>
          </div>
          <div className={style.videoList}>
            {videoInfos}
          </div>
        </div>
      </div>
    );
  }
}

const getCurrentlyPlayingName = (videos: YoutubeVideoInfo[], currentlyPlayingId: string) => {
  const video = videos.find(v => v.id === currentlyPlayingId);
  return video ? video.name : 'Loading...';
};

const connectPage = connect(
    (state: StoreState) => ({
      videos: state.playlist.videos,
      currentlyPlaying: state.player.videoID,
    }),
    { setVideo, loadVideo, savePlaylist },
);

export default connectPage(Playlist);
