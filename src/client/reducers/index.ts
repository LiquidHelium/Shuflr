import { combineReducers } from 'redux';

import playlistReducer, { PlaylistReducerState } from './playlist';
import playerReducer, { PlayerReducerState } from './player';

export interface StoreState {
  playlist: PlaylistReducerState;
  player: PlayerReducerState;
}

export default combineReducers({
  playlist: playlistReducer,
  player: playerReducer,
});

