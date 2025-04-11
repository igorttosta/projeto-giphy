import { api } from 'src/boot/axios';

export interface GiphyImage {
  url: string;
  width: string;
  height: string;
}

export interface GiphyGif {
  id: string;
  title: string;
  images: {
    original: GiphyImage;
    fixed_height: GiphyImage;
    fixed_width: GiphyImage;
  };
}

export interface GiphyResponse {
  data: GiphyGif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
}

export const giphyService = {
  async getTrending(limit = 20, offset = 0): Promise<GiphyResponse> {
    const response = await api.get('/trending', {
      params: {
        limit,
        offset,
        rating: 'g',
      },
    });
    return response.data;
  },

  async search(query: string, limit = 20, offset = 0): Promise<GiphyResponse> {
    const response = await api.get('/search', {
      params: {
        q: query,
        limit,
        offset,
        rating: 'g',
      },
    });
    return response.data;
  },
};
