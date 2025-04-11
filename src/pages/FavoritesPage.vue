<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Favoritos</div>
    <div v-if="favorites.length === 0" class="text-center q-mt-xl">
      <q-icon name="favorite_border" size="48px" color="grey" />
      <div class="text-h6 q-mt-sm">Nenhum GIF favorito ainda</div>
      <div class="text-subtitle1">Adicione GIFs aos favoritos para vê-los aqui</div>
    </div>
    <div v-else class="row q-col-gutter-md">
      <div v-for="gif in favorites" :key="gif.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <GifCard :gif="gif" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFavoritesStore } from 'src/stores/favorites';
import GifCard from 'components/GifCard.vue';

const favoritesStore = useFavoritesStore();
const favorites = favoritesStore.favorites;

onMounted(() => {
  favoritesStore.loadFavorites();
});
</script>
