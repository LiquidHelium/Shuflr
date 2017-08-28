import {
    ActionKeys,
    SetupPlayerAction,
    SetVideoAction,
    PlayVideoAction,
    TeardownPlayerAction,
} from './types';

export const setupPlayer = (player: any): SetupPlayerAction => {
  return {
    type: ActionKeys.SETUP_PLAYER,
    payload: {
      player,
    },
  };
};

export const setVideo = (id: string): SetVideoAction => {
  return {
    type: ActionKeys.SET_VIDEO,
    payload: {
      id,
    },
  };
};

export const playVideo = (): PlayVideoAction => {
  return {
    type: ActionKeys.PLAY_VIDEO,
  };
};

export const teardownPlayer = (): TeardownPlayerAction => {
  return {
    type: ActionKeys.TEARDOWN_PLAYER,
  };
};
