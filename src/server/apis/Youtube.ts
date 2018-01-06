import * as Youtube from 'youtube-api';

Youtube.authenticate({
  type: 'key',
  key: 'AIzaSyC3TdgboyiPRLONe4MVXQXdXbqwPYSFHhI',
});

const getInfo = (item: any): YoutubeVideoInfo => ({
  id: item.id,
  thumbnail: item.snippet.thumbnails.high.url,
  name: item.snippet.title,
});

export const getVideoInfo = async (id: string): Promise<YoutubeVideoInfo> => (
  new Promise<YoutubeVideoInfo>((res, rej) => {
    Youtube.videos.list({ id, part: 'snippet,contentDetails' }, (err: Error|null, data: any) => {
      if (err) rej(err);
      try {
        const info = getInfo(data.items[0]);
        res(info);
      } catch (err) {
        rej(err);
      }
    });
  })
);
