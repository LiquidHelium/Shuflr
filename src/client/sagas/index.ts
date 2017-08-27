import { all, take } from 'redux-saga/effects';


export function* setupPlayer() {
  const player = (yield take('SETUP_PLAYER')).payload.player;
  while (true) {
    yield take('START_PLAYER');
    player.playVideo();
  }
}
  

export default function* () {
  yield all([
    setupPlayer(),
  ]);
}
