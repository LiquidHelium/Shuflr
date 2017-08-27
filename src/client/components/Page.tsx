import * as React from 'react';
import Player from './player';
import VideoInfo from './VideoInfo';
import { getVideoInfo } from '../api/youtube';
import { connect } from 'react-redux';
import { setVideos } from '../actions';
import { StoreState } from '../reducers';

const videos = [
  '1f9o0HF_iU4',
  '7QLSRMoKKS0',
  'TV7sbaffuNo',
  'otIabO9CL_I',
  '5dqBhFI8f7w',
];

export interface PageProps {
  videos: YoutubeVideoInfo[];
  setVideos(videos: YoutubeVideoInfo[]): any;
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
        <VideoInfo key={info.id} name={info.name} thumbnail={info.thumbnail} />
      ));
  
    return (
      <div>
        {videoInfos}
        <Player videos={videos} />
      </div>
    );
  }
}

const connectPage = connect(
    (state: StoreState) => ({ videos: state.videos.videos }),
    { setVideos },
);

export default connectPage(Page);
