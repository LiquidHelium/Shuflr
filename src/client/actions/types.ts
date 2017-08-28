export enum ActionKeys {
    OTHER_ACTION = 'OTHER_ACTION',
    SET_VIDEOS = 'SET_VIDEOS',
    SET_VIDEO = 'SET_VIDEO',
    PLAY_VIDEO = 'PLAY_VIDEO',
    SETUP_PLAYER = 'SETUP_PLAYER',
    TEARDOWN_PLAYER = 'TEARDOWN_PLAYER',
}

export interface OtherAction {
  type: ActionKeys.OTHER_ACTION;
}

export interface SetVideosAction {
  type: ActionKeys.SET_VIDEOS;
  payload: {
    videos: YoutubeVideoInfo[];
  };
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
  SetVideosAction |
  SetupPlayerAction |
  TeardownPlayerAction |
  PlayVideoAction |
  SetVideoAction;
