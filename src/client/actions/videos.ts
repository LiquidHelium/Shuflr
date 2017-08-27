import { ActionKeys } from './index';

interface SetVideosAction {
  type: ActionKeys.SET_VIDEOS;
  payload: {
    videos: YoutubeVideoInfo[];
  };
}

export const setVideos = (videos: YoutubeVideoInfo[]): SetVideosAction => {
  return {
    type: ActionKeys.SET_VIDEOS,
    payload: {
      videos,
    },
  };
};
