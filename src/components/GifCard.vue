<template>
  <q-card class="gif-card">
    <q-img
      :src="gif.images.fixed_height.url"
      :ratio="Number(gif.images.fixed_height.height) / Number(gif.images.fixed_height.width)"
      spinner-color="primary"
    />
    <q-card-section class="row items-center justify-between q-pa-sm">
      <div class="text-caption ellipsis" style="max-width: 80%">
        {{ gif.title.length > 30 ? gif.title.substring(0, 30) + '...' : gif.title }}
      </div>
      <q-btn
        flat
        round
        :color="isFavorite ? 'red' : 'grey'"
        :icon="isFavorite ? 'favorite' : 'favorite_border'"
        @click="toggleFavorite"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { GiphyGif } from 'src/services/giphy';
import { useFavoritesStore } from 'src/stores/favorites';
import { computed } from 'vue';

const props = defineProps<{
  gif: GiphyGif;
}>();

const favoritesStore = useFavoritesStore();
const isFavorite = computed(() => favoritesStore.isFavorite(props.gif.id));

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.gif);
};
</script>

<style scoped>
.gif-card {
  width: 100%;
  max-width: 300px;
}
</style>
