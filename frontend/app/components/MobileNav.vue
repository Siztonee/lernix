<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-dark-900 border-t border-dark-700 z-10">
    <div class="grid grid-cols-4 py-2">
      <MobileNavItem :icon="HomeIcon" to="/" @click="closeMobileMenu" title="Главная" />
      <MobileNavItem :icon="CalendarIcon" to="/schedule" @click="closeMobileMenu" title="Расписание" />
      <MobileNavItem :icon="AcademicCapIcon" to="/grades" @click="closeMobileMenu" title="Оценки" />
      <MobileNavItem :icon="UserIcon" to="/profile" @click="closeMobileMenu" title="Профиль" />
    </div>
  </nav>
</template>

<script setup>
import {
  HomeIcon,
  CalendarIcon,
  AcademicCapIcon,
  UserIcon
} from '@heroicons/vue/24/outline'

const closeMobileMenu = () => {};
</script>