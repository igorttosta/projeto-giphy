<template>
  <q-header elevated class="top-bar-custom">
    <q-toolbar>
      <q-toolbar-title>Projeto Giphy</q-toolbar-title>
      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts"></script>

<style>
.top-bar-custom {
  width: 100% !important;
  z-index: 2000;
}
</style>
