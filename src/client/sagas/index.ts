import { watch } from 'fs';
import { all, take, call, put, select } from 'redux-saga/effects';
import { ActionKeys, setPlaylist, setVideo, addVideo } from '../actions';
import { getPlaylist, uploadPlaylist } from '../api/playlist';
import { getVideoInfo } from '../api/youtube';
import { StoreState } from '../reducers';
import history from '../components/App/History';

export function getRandomVideo(videos: YoutubeVideoInfo[], currentVideoID?: string) {
  const filteredVideos = !currentVideoID
    ? videos
    : videos.filter(video => video.id !== currentVideoID);

  const index = Math.floor(Math.random() * videos.length);
  return  videos[index];
}

export function* loadPlaylist() {
  while (true) {
    const playlistID = (yield take(ActionKeys.LOAD_PLAYLIST)).payload.id;
    const playlist = yield call(getPlaylist, playlistID);
    const videos = yield playlist.videos.map(getVideoInfo);
    yield put(setPlaylist(playlistID, videos));

    const randomVideo = yield call(getRandomVideo, playlist.videos);
    yield put(setVideo(randomVideo));
  }
}

export function* loadNextVideo() {
  while (true) {
    yield take(ActionKeys.LOAD_NEXT_VIDEO);
    const videos = yield select((state: StoreState) => state.playlist.videos);
    const currentVideo = yield select((state: StoreState) => state.player.videoID);
    const randomVideo = yield call(getRandomVideo, videos, currentVideo);
    yield put(setVideo(randomVideo.id));
  }
}

export function* loadVideo() {
  while (true) {
    const videoID = (yield take(ActionKeys.LOAD_VIDEO)).payload.id;
    const video = yield call(getVideoInfo, videoID);
    yield put(addVideo(video));
  }
}

export function* savePlaylist() {
  while (true) {
    try {
      yield take(ActionKeys.SAVE_PLAYLIST);
      const videos: YoutubeVideoInfo[] = yield select((state: StoreState) => state.playlist.videos);
      const videoIds = videos.map(video => video.id);
      const shortcode = yield call(uploadPlaylist, videoIds);
      yield call(x => history.push(x), `/${shortcode}`);
    } catch (err) {
      console.error(err);
    }
  }
}

export default function* () {
  yield all([
    loadPlaylist(),
    loadNextVideo(),
    loadVideo(),
    savePlaylist(),
  ]);
}
