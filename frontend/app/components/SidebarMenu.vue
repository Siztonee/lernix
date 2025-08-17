<template>
  <nav class="space-y-1">
    <h3 class="px-3 text-xs uppercase tracking-wider text-gray-500 mb-2">
      Основное
    </h3>
    
    <SidebarItem icon="HomeIcon" to="/">Главная</SidebarItem>
    <SidebarItem icon="CalendarIcon" to="/schedule">Расписание</SidebarItem>
    <SidebarItem icon="AcademicCapIcon" to="/grades">Успеваемость</SidebarItem>
    
    <h3 class="px-3 text-xs uppercase tracking-wider text-gray-500 mt-6 mb-2">
      Дополнительно
    </h3>
    
    <SidebarItem icon="CurrencyDollarIcon" to="/payments">Оплаты</SidebarItem>
    <SidebarItem icon="ChartBarIcon" to="/analytics">Аналитика</SidebarItem>
    <SidebarItem icon="CogIcon" to="/settings">Настройки</SidebarItem>
  </nav>
</template>