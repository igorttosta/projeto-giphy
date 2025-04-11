<template>
  <q-drawer
    v-model="leftDrawerOpen"
    :mini="$q.screen.lt.sm"
    :width="280"
    height="100vh"
    :mini-width="60"
    :breakpoint="500"
    bordered
    class="bg-primary text-white sidebar-custom"
  >
    <q-list class="q-mt-md">
      <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from './EssentialLink.vue';

const leftDrawerOpen = ref(true);

const linksList: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: 'Página inicial',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Favoritos',
    caption: 'Seus GIFs favoritos',
    icon: 'favorite',
    link: '/favorites',
  },
  {
    title: 'Sobre',
    caption: 'Informações sobre o projeto',
    icon: 'info',
    link: '/about',
  },
];
</script>

<style scoped>
.sidebar-custom {
  height: 100vh !important;
  position: fixed;
}
</style>
