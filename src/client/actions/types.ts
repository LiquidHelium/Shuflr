export enum ActionKeys {
    SET_VIDEOS = 'SET_VIDEOS',
    OTHER_ACTION = 'OTHER_ACTION',
}

interface OtherAction {
  type: ActionKeys.OTHER_ACTION;
}

interface SetVideosAction {
  type: ActionKeys.SET_VIDEOS;
  payload: {
    videos: YoutubeVideoInfo[];
  };
}

export type ActionType = OtherAction | SetVideosAction;
