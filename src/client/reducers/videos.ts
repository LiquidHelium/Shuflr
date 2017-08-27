import * as R from 'ramda';
import { ActionType, ActionKeys } from '../actions';

export interface VideosReducerState {
  videos: YoutubeVideoInfo[];
}

const defaultState = { videos: [] };

export default (state: VideosReducerState = defaultState,
                action: ActionType): VideosReducerState => {
  switch (action.type) {
    case ActionKeys.SET_VIDEOS: 
      return { videos: action.payload.videos };
    default:
      return state;
  }
};
