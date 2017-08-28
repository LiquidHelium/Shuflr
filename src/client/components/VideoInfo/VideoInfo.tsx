import * as React from 'react';

const style = require('./style.scss');

interface VideoInfoProps {
  thumbnail: string;
  name: string;
  active: boolean;
  onClick?(): void;
}

const VideoInfo = ({ thumbnail, name, onClick, active }: VideoInfoProps) => (
  <div className={`${style.info} ${active ? style.active : ''}`} onClick={onClick}>
    <div className={style.imageWrapper}>
      <div className={style.image} style={{ backgroundImage: `url(${thumbnail})` }} />
    </div>
    <div className={style.details}>
      <h1>{name}</h1>
    </div>
  </div>
);

export default VideoInfo;
