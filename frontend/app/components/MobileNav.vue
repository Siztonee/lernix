<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-dark-900 border-t border-dark-700 z-50">
    <div class="grid grid-cols-4">
      <MobileNavItem to="/" icon="HomeIcon" @click="closeMobileMenu" />
      <MobileNavItem to="/schedule" icon="CalendarIcon" @click="closeMobileMenu" />
      <MobileNavItem to="/grades" icon="AcademicCapIcon" @click="closeMobileMenu" />
      <MobileNavItem to="/profile" icon="UserIcon" @click="closeMobileMenu" />
    </div>
  </nav>
</template>

<script setup>
// Закрываем мобильное меню при нажатии на пункт
const closeMobileMenu = () => {
  // Используем глобальное событие или хранилище, если нужно
  // В простых случаях можно использовать emit
};
</script>