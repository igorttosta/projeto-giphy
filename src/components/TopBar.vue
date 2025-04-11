<template>
  <q-header elevated class="top-bar-custom">
    <q-toolbar>
      <q-toolbar-title class="row items-center">
        <q-img src="/images/logo.jpg" width="32px" height="32px" class="q-mr-sm" />
        Projeto Giphy
      </q-toolbar-title>
      <ProfileAvatar />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import ProfileAvatar from './ProfileAvatar.vue';
</script>

<style>
.top-bar-custom {
  width: 100% !important;
  z-index: 2000;
}
</style>
