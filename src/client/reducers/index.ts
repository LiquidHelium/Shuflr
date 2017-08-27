import { combineReducers } from 'redux';

import videoReducer, { VideosReducerState } from './videos';

export interface StoreState {
  videos: VideosReducerState;
}

export default combineReducers({ videos: videoReducer });

