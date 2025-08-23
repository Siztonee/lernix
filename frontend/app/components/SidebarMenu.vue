<template>
  <nav class="p-4 space-y-2">
    <h3 class="px-3 text-xs uppercase tracking-wider text-gray-500 mb-2">
      Основное
    </h3>
    
    <SidebarItem :icon="HomeIcon" to="/" title="Главная" />
    <SidebarItem :icon="CalendarIcon" to="/schedule" title="Расписание" />
    <SidebarItem :icon="AcademicCapIcon" to="/grades" title="Успеваемость" />
    
    <h3 class="px-3 text-xs uppercase tracking-wider text-gray-500 mt-6 mb-2">
      Дополнительно
    </h3>
    
    <SidebarItem :icon="CurrencyDollarIcon" to="/payments" title="Оплаты" />
    <SidebarItem :icon="ChartBarIcon" to="/analytics" title="Аналитика" />
    <SidebarItem :icon="CogIcon" to="/settings" title="Настройки" />
  </nav>
</template>

<script setup>
import {
  HomeIcon,
  CalendarIcon,
  AcademicCapIcon,
  CurrencyDollarIcon, 
  ChartBarIcon, 
  CogIcon
} from '@heroicons/vue/24/outline'
</script>