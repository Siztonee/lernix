<template>
  <div class="min-h-screen flex flex-col bg-dark-800 text-gray-100">
    <!-- Шапка -->
    <header class="sticky top-0 z-10 bg-dark-900 shadow-lg">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center space-x-3">
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