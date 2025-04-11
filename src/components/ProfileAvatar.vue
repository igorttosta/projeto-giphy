<template>
  <div>
    <q-avatar @click.stop="toggleMenu" class="cursor-pointer hover-effect" size="32px">
      <q-icon name="person" />
    </q-avatar>

    <q-menu
      v-model="showMenu"
      anchor="bottom right"
      self="top right"
      :offset="[0, 8]"
      transition-show="jump-down"
      transition-hide="jump-up"
    >
      <q-list style="min-width: 200px">
        <q-item>
          <q-item-section>
            <q-item-label class="text-weight-bold">Desenvolvedor</q-item-label>
            <q-item-label caption>Igor Tosta Matos</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style scoped>
.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}
</style>
