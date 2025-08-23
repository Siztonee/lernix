<template>
  <div class="min-h-screen flex flex-col bg-dark-800 text-gray-100">
    <!-- Шапка -->
    <header class="sticky top-0 z-30 bg-dark-900 shadow-lg">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <!-- Бургер-меню -->
          <button 
            @click="toggleSidebar"
            class="text-gray-400 hover:text-white transition-colors mr-2"
            :aria-label="sidebarOpen ? 'Скрыть меню' : 'Показать меню'"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="sidebarOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
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
            <MobileNavItem to="/" @click="closeMobileMenu">Главная</MobileNavItem>
            <MobileNavItem to="/schedule" @click="closeMobileMenu">Расписание</MobileNavItem>
            <MobileNavItem to="/grades" @click="closeMobileMenu">Оценки</MobileNavItem>
            <MobileNavItem to="/payments" @click="closeMobileMenu">Оплаты</MobileNavItem>
            <MobileNavItem to="/profile" @click="closeMobileMenu">Профиль</MobileNavItem>
          </div>
        </div>
      </transition>
    </header>

    <!-- Основной контент -->
    <div class="flex flex-1">
      <!-- Сайдбар для десктопа (абсолютное позиционирование) -->
      <transition
        enter-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="opacity-0 -translate-x-10"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-300 ease-in-out"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-10"
      >
        <aside 
          v-if="sidebarOpen && !isMobile" 
          class="hidden md:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-dark-800 border-r border-dark-700 overflow-y-auto z-20"
        >
          <SidebarMenu />
        </aside>
      </transition>

      <!-- Центральная область -->
      <main class="flex-1 container mx-auto px-4 py-6 transition-all duration-300">
        <slot />
      </main>
    </div>

    <!-- Мобильный сайдбар (нижнее меню) -->
    <MobileNav class="md:hidden" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Загружаем состояние из Local Storage
const loadSidebarState = () => {
  if (process.client) {
    const saved = localStorage.getItem('lernix-sidebar-state')
    return saved ? JSON.parse(saved) : true
  }
  return true
}

const saveSidebarState = (state) => {
  if (process.client) {
    localStorage.setItem('lernix-sidebar-state', JSON.stringify(state))
  }
}

const sidebarOpen = ref(loadSidebarState())
const isMobileMenuOpen = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const toggleSidebar = () => {
  if (isMobile.value) {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  } else {
    sidebarOpen.value = !sidebarOpen.value
    saveSidebarState(sidebarOpen.value)
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleResize = () => {
  checkMobile()
  if (isMobile.value) {
    sidebarOpen.value = false
  } else {
    // Восстанавливаем состояние сайдбара на десктопе
    sidebarOpen.value = loadSidebarState()
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', handleResize)
  
  // На мобильных устройствах сайдбар всегда скрыт
  if (isMobile.value) {
    sidebarOpen.value = false
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>