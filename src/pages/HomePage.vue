<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Home</div>
    <q-input
      v-model="searchQuery"
      outlined
      placeholder="Pesquisar GIFs"
      class="q-mb-md"
      @keyup.enter="searchGifs"
    >
      <template v-slot:append>
        <q-icon name="search" class="cursor-pointer" @click="searchGifs" />
      </template>
    </q-input>
    <div class="row q-col-gutter-md">
      <div v-for="gif in gifs" :key="gif.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <gif-card :gif="gif" />
      </div>
    </div>
    <div class="row justify-center q-mt-lg" v-if="loading">
      <q-spinner color="primary" size="3em" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { giphyService, type GiphyGif } from 'src/services/giphy';
import GifCard from 'components/GifCard.vue';

const gifs = ref<GiphyGif[]>([]);
const loading = ref(false);
const searchQuery = ref('');

const loadTrendingGifs = async () => {
  try {
    loading.value = true;
    const response = await giphyService.getTrending();
    gifs.value = response.data;
  } catch (error) {
    console.error('Error loading trending GIFs:', error);
  } finally {
    loading.value = false;
  }
};

const searchGifs = async () => {
  if (!searchQuery.value.trim()) {
    await loadTrendingGifs();
    return;
  }
  try {
    loading.value = true;
    const response = await giphyService.search(searchQuery.value);
    gifs.value = response.data;
  } catch (error) {
    console.error('Error searching GIFs:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await loadTrendingGifs();
});
</script>
