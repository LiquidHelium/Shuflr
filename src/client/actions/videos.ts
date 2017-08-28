import { ActionKeys, SetVideosAction } from './types';

export const setVideos = (videos: YoutubeVideoInfo[]): SetVideosAction => {
  return {
    type: ActionKeys.SET_VIDEOS,
    payload: {
      videos,
    },
  };
};
