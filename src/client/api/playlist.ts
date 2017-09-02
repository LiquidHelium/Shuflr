import axios from 'axios';

export interface PlaylistInfo {
  id: number;
  shortcode: string;
  videos: string[];
}

export const getPlaylist = async (id: string): Promise<PlaylistInfo> => {
  const val = await axios(`/playlist/${id}`);
  const videos = JSON.parse(val.data.videos);
  return { ...val.data, videos };
};
