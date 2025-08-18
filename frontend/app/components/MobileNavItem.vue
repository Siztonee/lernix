<template>
  <NuxtLink 
    :to="to"
    class="flex items-center px-4 py-3 rounded-lg transition-colors"
    :class="{
      'bg-dark-700 text-primary-green': isActive,
      'text-gray-300 hover:bg-dark-700': !isActive
    }"
    @click="$emit('click')"
  >
    <component :is="icon" class="w-5 h-5 mr-3" />
    <span><slot /></span>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  icon: Object,
  to: String
});

const isActive = computed(() => route.path === props.to);
</script>