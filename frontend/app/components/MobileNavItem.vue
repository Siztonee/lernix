<template>
  <NuxtLink 
    :to="to"
    class="flex flex-col items-center py-2 transition-colors"
    :class="{
      'text-primary-green': isActive,
      'text-gray-300': !isActive
    }"
    @click="$emit('click')"
  >
    <component :is="icon" class="w-6 h-6 mb-1 text-white" />
    <span class="text-xs">{{ title }}</span>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  icon: Object,
  title: String,
  to: String
});

const isActive = computed(() => route.path === props.to);
</script>