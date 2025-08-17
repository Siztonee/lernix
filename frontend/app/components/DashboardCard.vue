<template>
  <div class="bg-dark-700 rounded-xl p-4 border border-dark-600">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-semibold">Расписание на сегодня</h3>
      <span class="text-xs bg-primary-green/10 text-primary-green px-2 py-1 rounded">Обновлено</span>
    </div>
    <div class="space-y-3">
      <div class="flex items-center">
        <div class="w-3 h-3 rounded-full bg-primary-purple mr-3"></div>
        <div>
          <p class="font-medium">Веб-технологии</p>
          <p class="text-xs text-gray-400">10:00 - 11:30, ауд. 304</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 rounded-full bg-primary-green mr-3"></div>
        <div>
          <p class="font-medium">Базы данных</p>
          <p class="text-xs text-gray-400">12:00 - 13:30, ауд. 415</p>
        </div>
      </div>
    </div>
  </div>
</template>