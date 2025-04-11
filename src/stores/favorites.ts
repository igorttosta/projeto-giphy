import { defineStore } from 'pinia';
import type { GiphyGif } from 'src/services/giphy';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as GiphyGif[],
  }),

  getters: {
    isFavorite: (state) => (gifId: string) => {
      return state.favorites.some((gif) => gif.id === gifId);
    },
  },

  actions: {
    toggleFavorite(gif: GiphyGif) {
      const index = this.favorites.findIndex((item) => item.id === gif.id);
      if (index === -1) {
        this.favorites.push(gif);
      } else {
        this.favorites.splice(index, 1);
      }
      this.saveFavorites();
    },

    saveFavorites() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },

    loadFavorites() {
      const saved = localStorage.getItem('favorites');
      if (saved) {
        this.favorites = JSON.parse(saved);
      }
    },
  },
});
