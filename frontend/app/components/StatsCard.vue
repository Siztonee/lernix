<template>
  <div class="bg-dark-700 rounded-xl p-4 border border-dark-600">
    <p class="text-2xl font-bold mb-1">{{ value }}</p>
    <p class="text-gray-400 text-sm">{{ label }}</p>
    <div class="flex items-center mt-2" :class="trend === 'up' ? 'text-primary-green' : 'text-red-400'">
      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="trend === 'up'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      <span class="text-xs">{{ trend === 'up' ? '+5.2%' : '-2.1%' }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  value: String,
  label: String,
  trend: {
    type: String,
    default: 'up',
    validator: value => ['up', 'down'].includes(value)
  }
})
</script>