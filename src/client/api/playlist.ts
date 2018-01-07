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

export const uploadPlaylist = async (videos: string[]): Promise<string> => {
  const response = await axios.post(`/playlist`, { videos });
  return response.data.shortcode;
};
