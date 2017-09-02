import * as R from 'ramda';
import { ActionType, ActionKeys } from '../actions';

export interface PlayerReducerState {
  playing: boolean;
  videoID: string | null;
}

const defaultState = { playing: true, videoID: null };

export default (state: PlayerReducerState = defaultState,
                action: ActionType): PlayerReducerState => {
  switch (action.type) {

    case ActionKeys.SET_VIDEO: 
      return { ...state, videoID: action.payload.id };

    case ActionKeys.PLAY_VIDEO: 
      return { ...state, playing: true };

    case ActionKeys.PAUSE_VIDEO: 
      return { ...state, playing: false };

    default:
      return state;
  }
};
