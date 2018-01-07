import {
  ActionKeys,
  SetPlaylistAction,
  LoadPlaylistAction,
  AddVideoAction,
  LoadVideoAction,
} from './types';

export const loadPlaylist = (id: string): LoadPlaylistAction => ({
  type: ActionKeys.LOAD_PLAYLIST,
  payload: {
    id,
  },
});

export const setPlaylist = (id: string, videos: YoutubeVideoInfo[]): SetPlaylistAction => {
  return {
    type: ActionKeys.SET_PLAYLIST,
    payload: {
      id,
      videos,
    },
  };
};

export const addVideo = (video: YoutubeVideoInfo): AddVideoAction => {
  return {
    type: ActionKeys.ADD_VIDEO,
    payload: {
      video,
    },
  };
};

export const loadVideo = (id: string): LoadVideoAction => {
  return {
    type: ActionKeys.LOAD_VIDEO,
    payload: {
      id,
    },
  };
};
