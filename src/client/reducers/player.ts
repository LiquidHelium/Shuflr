import * as R from 'ramda';
import { ActionType, ActionKeys } from '../actions';

export interface PlayerReducerState {
  currentlyPlaying: string | null;
}

const defaultState = { currentlyPlaying: null };

export default (state: PlayerReducerState = defaultState,
                action: ActionType): PlayerReducerState => {
  switch (action.type) {
    case ActionKeys.SET_VIDEO: 
      return { currentlyPlaying: action.payload.id };
    default:
      return state;
  }
};
