import { all, take, call } from 'redux-saga/effects';


export function* playerActions(player: any, action: any): any {
  switch (action.type) {
    case 'START_PLAYER':
      return player.playVideo();
    case 'SET_VIDEO':
      return player.loadVideoById(action.payload.id, 0, 'large');
    default:
      return;

  }
}


export function* setupPlayer() {
  while (true) {
    const player = (yield take('SETUP_PLAYER')).payload.player;
    while (true) {
      const action = yield take();
      if (action.type === 'TEARDOWN_PLAYER') {
        break;
      }
      yield call(playerActions, player, action);
    }
  }
}
  

export default function* () {
  yield all([
    setupPlayer(),
  ]);
}
