import * as React from 'react';

const style = require('./style.scss');

interface VideoInfoProps {
  thumbnail: string;
  name: string;
  active: boolean;
  onClick?(): void;
}

const VideoInfo = ({ thumbnail, name, onClick, active }: VideoInfoProps) => (
  <div className={style.container}>
    <div className={`${style.info} ${active ? style.active : ''}`} onClick={onClick}>
      <div className={style.image} style={{ backgroundImage: `url(${thumbnail})` }}/>
      <h3>{name}</h3>
    </div>
  </div>
);

export default VideoInfo;
