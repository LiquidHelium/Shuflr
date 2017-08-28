import { combineReducers } from 'redux';

import videoReducer, { VideosReducerState } from './videos';
import playerReducer, { PlayerReducerState } from './player';

export interface StoreState {
  videos: VideosReducerState;
  player: PlayerReducerState;
}

export default combineReducers({
  videos: videoReducer,
  player: playerReducer,
});

