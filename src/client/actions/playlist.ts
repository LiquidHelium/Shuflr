import { ActionKeys, SetPlaylistAction, LoadPlaylistAction } from './types';

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
