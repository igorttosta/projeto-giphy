<template>
  <q-layout view="hHh lpR fFf">
    <TopBar />
    <SideBar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TopBar from 'components/TopBar.vue';
import SideBar from 'components/SideBar.vue';
</script>
