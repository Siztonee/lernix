<template>
  <div>
    <!-- Герой-секция -->
    <section class="relative bg-gradient-to-r from-dark-800 to-dark-900 py-20 md:py-32 overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-12 md:mb-0">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              <span class="block mb-2">Добро пожаловать в</span>
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-primary-purple">Lernix</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-lg">
              Инновационная платформа для высшего образования, объединяющая студентов, преподавателей и администрацию в единой цифровой среде.
            </p>
            <div class="flex flex-wrap gap-4">
              <button class="px-8 py-3 bg-gradient-to-r from-primary-green to-primary-purple rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-primary-green/20">
                Начать работу
              </button>
              <button class="px-8 py-3 bg-dark-700 rounded-lg font-medium hover:bg-dark-600 transition-all border border-dark-600">
                Узнать больше
              </button>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative">
              <div class="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary-purple/30 to-primary-green/30 blur-3xl animate-pulse-slow"></div>
              <div class="relative bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-2xl p-6 shadow-xl">
                <div class="grid grid-cols-2 gap-4">
                  <DashboardCard class="col-span-2" />
                  <StatsCard value="94%" label="Успеваемость" trend="up" />
                  <StatsCard value="87%" label="Посещаемость" trend="up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent z-0"></div>
    </section>

    <!-- Преимущества -->
    <section class="py-20 bg-dark-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">Преимущества платформы</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="LightningBoltIcon"
            title="Экономия времени"
            description="Автоматизация рутинных задач для преподавателей и администрации"
          />
          <FeatureCard 
            icon="ChartBarIcon"
            title="Аналитика в реальном времени"
            description="Мгновенный доступ к статистике и отчетам для принятия решений"
          />
          <FeatureCard 
            icon="DeviceMobileIcon"
            title="Полная мобильность"
            description="Доступ ко всем функциям с любого устройства в любое время"
          />
        </div>
      </div>
    </section>

    <!-- Для кого -->
    <section class="py-20 bg-dark-850">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">Lernix для всех участников</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <UserCard 
            role="Студенты"
            icon="AcademicCapIcon"
            :features="[
              'Расписание занятий',
              'Электронная зачетка',
              'Рейтинг успеваемости',
              'Управление оплатами',
              'Учебные материалы'
            ]"
            color="from-primary-purple to-indigo-600"
          />
          
          <UserCard 
            role="Преподаватели"
            icon="UserGroupIcon"
            :features="[
              'Система оценивания',
              'Отметка посещаемости',
              'Управление материалами',
              'Аналитика по группам',
              'Автоматические отчеты'
            ]"
            color="from-primary-green to-emerald-600"
            class="lg:mt-10"
          />
          
          <UserCard 
            role="Администрация"
            icon="BriefcaseIcon"
            :features="[
              'Централизованное управление',
              'Статистика по факультетам',
              'Финансовые отчеты',
              'Аналитика эффективности',
              'Интеграция с ИИ'
            ]"
            color="from-amber-500 to-orange-500"
          />
        </div>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="py-20 bg-gradient-to-r from-dark-800 to-dark-900">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Готовы к цифровой трансформации?</h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Присоединяйтесь к платформе Lernix и станьте частью современного образовательного процесса
        </p>
        <button class="px-10 py-4 bg-gradient-to-r from-primary-green to-primary-purple rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary-purple/30">
          Запросить демо-доступ
        </button>
      </div>
    </section>

    <!-- Футер -->
    <footer class="bg-dark-900 py-12 border-t border-dark-700">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary-purple to-primary-green flex items-center justify-center">
                <span class="text-xl font-bold">L</span>
              </div>
              <h3 class="text-2xl font-bold">Lernix</h3>
            </div>
            <p class="mt-2 text-gray-500 max-w-xs">
              Инновационная образовательная платформа нового поколения
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 class="text-lg font-semibold mb-4">Платформа</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-primary-green transition-colors">О проекте</a></li>
                <li><a href="#" class="hover:text-primary-green transition-colors">Возможности</a></li>
                <li><a href="#" class="hover:text-primary-green transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Поддержка</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-primary-green transition-colors">Документация</a></li>
                <li><a href="#" class="hover:text-primary-green transition-colors">FAQ</a></li>
                <li><a href="#" class="hover:text-primary-green transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-dark-800 text-center text-gray-500">
          <p>&copy; 2025 Lernix. Все права защищены.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { AcademicCapIcon, BriefcaseIcon, UserGroupIcon, LightningBoltIcon, ChartBarIcon, DeviceMobileIcon } from '@heroicons/vue/outline'
</script>