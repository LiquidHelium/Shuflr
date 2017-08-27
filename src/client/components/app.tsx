import * as React from 'react';
import Player from './player';
import VideoInfo from './VideoInfo';
import { getVideoInfo } from '../api/youtube';

const videos = [
  '1f9o0HF_iU4',
  '7QLSRMoKKS0',
  'TV7sbaffuNo',
  'otIabO9CL_I',
  '5dqBhFI8f7w',
];

export interface AppProps {}

class App extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      videos,
      videoInfo: null,
    };

    this.doAction = this.doAction.bind(this);
  }

  async componentDidMount() {
    const downloadInfo = this.state.videos.map((id: any) => getVideoInfo(id));
    const videoInfo = await Promise.all(downloadInfo);
    this.setState({ videoInfo });
  }

  doAction() {
    this.setState({
      videos: ['PcmAg6-smKQ', ...this.state.videos],
    });
  }

  render() {
    const videoInfos = this.state.videoInfo == null ? null :
      this.state.videoInfo.map((info: any) => (
        <VideoInfo key={info.id} name={info.name} thumbnail={info.thumbnail} />
      ));
  
    return (
      <div>
        <Player videos={this.state.videos} />
        <a role="button" onClick={this.doAction}>Hello World!</a>
        {videoInfos}
      </div>
    );
  }
}

export default App;
