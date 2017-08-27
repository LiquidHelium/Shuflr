import * as React from 'react';

interface VideoInfoProps {
  thumbnail: string;
  name: string;
}

const VideoInfo = ({ thumbnail, name }: VideoInfoProps) => (
  <div>
    <img src={thumbnail} />
    <h1>{name}</h1>
  </div>
);

export default VideoInfo;
