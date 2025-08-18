<template>
  <div class="min-h-screen flex flex-col bg-dark-800 text-gray-100">
    <!-- Шапка -->
    <header class="sticky top-0 z-10 bg-dark-900 shadow-lg">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <!-- Бургер-меню для мобильных -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden mr-2 text-gray-400 hover:text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!isMobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-primary-purple to-primary-green flex items-center justify-center">
            <span class="text-xl font-bold">L</span>
          </div>
          <h1 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-primary-purple">
            Lernix
          </h1>
        </div>
        
        <div class="flex items-center space-x-6">
          <nav class="hidden md:flex space-x-8">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/schedule">Расписание</NavLink>
            <NavLink to="/grades">Оценки</NavLink>
          </nav>
          
          <UserDropdown />
        </div>
      </div>
      
      <!-- Мобильное меню (выпадающее) -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform opacity-0 -translate-y-2"
        enter-to-class="transform opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden px-4 py-3 border-t border-dark-700 bg-dark-900">
          <div class="flex flex-col space-y-3">
            <MobileNavItem to="/" icon="HomeIcon">Главная</MobileNavItem>
            <MobileNavItem to="/schedule" icon="CalendarIcon">Расписание</MobileNavItem>
            <MobileNavItem to="/grades" icon="AcademicCapIcon">Оценки</MobileNavItem>
            <MobileNavItem to="/payments" icon="CurrencyDollarIcon">Оплаты</MobileNavItem>
            <MobileNavItem to="/profile" icon="UserIcon">Профиль</MobileNavItem>
          </div>
        </div>
      </transition>
    </header>

    <!-- Основной контент -->
    <div class="flex flex-1 container mx-auto px-4 py-6">
      <!-- Сайдбар -->
      <aside class="hidden md:block w-64 pr-6 border-r border-dark-700">
        <SidebarMenu />
      </aside>

      <!-- Центральная область -->
      <main class="flex-1">
        <slot />
      </main>
    </div>

    <!-- Мобильный сайдбар (нижнее меню) -->
    <MobileNav class="md:hidden" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
</script>