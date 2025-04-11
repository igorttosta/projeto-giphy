<template>
  <q-item
    clickable
    :to="link"
    exact
    active-class="bg-blue-3 text-primary"
    :class="{ 'text-white': true }"
    hover-class="bg-blue-3 text-primary"
    class="q-py-sm q-px-md rounded-borders"
    style="margin: 4px 8px; border-radius: 8px"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
