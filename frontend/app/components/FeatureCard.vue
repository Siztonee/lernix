<template>
  <div class="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 hover:border-primary-purple/50 transition-all hover:shadow-lg">
    <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center" :class="iconBgClass">
      <component :is="icon" class="w-8 h-8 text-white" />
    </div>
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: Object,
  title: String,
  description: String
})

const iconBgClass = computed(() => {
  const icons = {
    LightningBoltIcon: 'bg-gradient-to-br from-primary-purple to-primary-green',
    ChartBarIcon: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    DeviceMobileIcon: 'bg-gradient-to-br from-amber-500 to-orange-500'
  }
  return icons[props.icon.name] || 'bg-gradient-to-br from-primary-purple to-primary-green'
})
</script>