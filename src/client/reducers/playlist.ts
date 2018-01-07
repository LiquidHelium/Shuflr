import * as R from 'ramda';
import { ActionType, ActionKeys } from '../actions';

export interface PlaylistReducerState {
  id: string | null;
  videos: YoutubeVideoInfo[];
}

const defaultState = { id: null, videos: [] };

export default (state: PlaylistReducerState = defaultState,
                action: ActionType): PlaylistReducerState => {
  switch (action.type) {
    case ActionKeys.SET_PLAYLIST: 
      return { id: action.payload.id, videos: action.payload.videos };
    case ActionKeys.ADD_VIDEO: 
      return { ...state, videos: R.append(action.payload.video, state.videos) };
    default:
      return state;
  }
};
