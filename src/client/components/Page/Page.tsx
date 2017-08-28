import * as React from 'react';
import Player from '../player';
import VideoInfo from '../VideoInfo';
import { getVideoInfo } from '../../api/youtube';
import { connect } from 'react-redux';
import { setVideos, setVideo } from '../../actions';
import { StoreState } from '../../reducers';

const style = require('./style.scss');

const videos = [
  '1f9o0HF_iU4',
  '7QLSRMoKKS0',
  'TV7sbaffuNo',
  'otIabO9CL_I',
  '5dqBhFI8f7w',
];

export interface PageProps {
  videos: YoutubeVideoInfo[];
  currentlyPlaying: string | null;
  setVideos(videos: YoutubeVideoInfo[]): any;
  setVideo(video: string): any;
}

class Page extends React.Component<PageProps, {}> {
  async componentDidMount() {
    const downloadInfo = videos.map((id: any) => getVideoInfo(id));
    const videoInfo = await Promise.all(downloadInfo);
    this.props.setVideos(videoInfo);
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
  
    return (
      <div className={style.base}>
        <div className={style.sidebar}>
          {videoInfos}
        </div>
        <div className={style.player}>
          <Player />
        </div>
      </div>
    );
  }
}

const connectPage = connect(
    (state: StoreState) => ({
      videos: state.videos.videos,
      currentlyPlaying: state.player.currentlyPlaying,
    }),
    { setVideos, setVideo },
);

export default connectPage(Page);
