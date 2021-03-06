export enum ActionKeys {
    OTHER_ACTION = 'OTHER_ACTION',
    LOAD_PLAYLIST = 'LOAD_PLAYLIST',
    LOAD_VIDEO = 'LOAD_VIDEO',
    ADD_VIDEO = 'ADD_VIDEO',
    SET_PLAYLIST = 'SET_PLAYLIST',
    SET_VIDEO = 'SET_VIDEO',
    PLAY_VIDEO = 'PLAY_VIDEO',
    PAUSE_VIDEO = 'PAUSE_VIDEO',
    LOAD_NEXT_VIDEO = 'LOAD_NEXT_VIDEO',
    SETUP_PLAYER = 'SETUP_PLAYER',
    TEARDOWN_PLAYER = 'TEARDOWN_PLAYER',
    SAVE_PLAYLIST = 'SAVE_PLAYLIST',
}

export interface OtherAction {
  type: ActionKeys.OTHER_ACTION;
}

export interface LoadPlaylistAction {
  type: ActionKeys.LOAD_PLAYLIST;
  payload: {
    id: string;
  };
}

export interface LoadVideoAction {
  type: ActionKeys.LOAD_VIDEO;
  payload: {
    id: string;
  };
}

export interface AddVideoAction {
  type: ActionKeys.ADD_VIDEO;
  payload: {
    video: YoutubeVideoInfo,
  };
}

export interface SetPlaylistAction {
  type: ActionKeys.SET_PLAYLIST;
  payload: {
    id: string;
    videos: YoutubeVideoInfo[];
  };
}

export interface SavePlaylistAction {
  type: ActionKeys.SAVE_PLAYLIST;
}

export interface SetVideoAction {
  type: ActionKeys.SET_VIDEO;
  payload: {
    id: string;
  };
}

export interface PlayVideoAction {
  type: ActionKeys.PLAY_VIDEO;
}

export interface PauseVideoAction {
  type: ActionKeys.PAUSE_VIDEO;
}

export interface LoadNextVideoAction {
  type: ActionKeys.LOAD_NEXT_VIDEO;
}

export interface SetupPlayerAction {
  type: ActionKeys.SETUP_PLAYER;
  payload: {
    player: any;
  };
}

export interface TeardownPlayerAction {
  type: ActionKeys.TEARDOWN_PLAYER;
}

export type ActionType =
  OtherAction |
  LoadPlaylistAction |
  SetPlaylistAction |
  LoadVideoAction |
  AddVideoAction |
  SetupPlayerAction |
  TeardownPlayerAction |
  PlayVideoAction |
  PauseVideoAction |
  LoadNextVideoAction |
  SetVideoAction;
