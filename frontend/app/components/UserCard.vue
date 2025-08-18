<template>
  <div class="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]">
    <div class="p-6" :class="headerBgClass">
      <div class="flex items-center">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <component :is="icon" class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-2xl font-bold ml-4">{{ role }}</h3>
      </div>
    </div>
    <div class="p-6">
      <ul class="space-y-3">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start">
          <svg class="w-5 h-5 text-primary-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  role: String,
  icon: Object,
  features: Array,
  color: {
    type: String,
    default: 'from-primary-purple to-primary-green'
  }
})

const headerBgClass = computed(() => `bg-gradient-to-r ${props.color}`)
</script>