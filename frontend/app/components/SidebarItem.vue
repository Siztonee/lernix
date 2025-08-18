<template>
  <NuxtLink 
    :to="to"
    class="flex items-center px-4 py-3 rounded-lg transition-colors duration-200 group"
    :class="{
      'bg-dark-700 text-primary-green': isActive,
      'text-gray-300 hover:bg-dark-700': !isActive
    }"
  >
    <div 
      class="w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors"
      :class="{
        'bg-gradient-to-r from-primary-purple to-primary-green': isActive,
        'bg-dark-700 group-hover:bg-dark-600': !isActive
      }"
    >
      <component :is="icon" class="w-4 h-4" />
    </div>
    <span class="font-medium">{{ title }}</span>
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