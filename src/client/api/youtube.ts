import axios from 'axios';

export const getVideoInfo = async (id: string): Promise<YoutubeVideoInfo> => {
  const val = await axios(`/youtube/${id}`);
  return val.data;
};
