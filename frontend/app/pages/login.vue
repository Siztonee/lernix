<template>
  <div class="min-h-screen flex items-center justify-center bg-dark-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Заголовок -->
      <div>
        <div class="flex justify-center">
          <div class="w-20 h-20 rounded-full bg-gradient-to-r from-primary-purple to-primary-green flex items-center justify-center">
            <span class="text-3xl font-bold text-white">L</span>
          </div>
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-primary-purple">
          Вход в Lernix
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Войдите в свою учетную запись чтобы продолжить
        </p>
      </div>

      <!-- Форма -->
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <!-- Поле логина -->
          <div>
            <label for="login" class="block text-sm font-medium text-gray-300 mb-2">
              Логин
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon class="h-5 w-5 text-gray-500" />
              </div>
              <input
                id="login"
                v-model="form.login"
                name="login"
                type="text"
                required
                class="bg-dark-800 border border-dark-700 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent block w-full pl-10 pr-4 py-3 transition-colors duration-200"
                placeholder="Введите ваш логин"
              >
            </div>
          </div>

          <!-- Поле пароля -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
              Пароль
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon class="h-5 w-5 text-gray-500" />
              </div>
              <input
                id="password"
                v-model="form.password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="bg-dark-800 border border-dark-700 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent block w-full pl-10 pr-12 py-3 transition-colors duration-200"
                placeholder="Введите ваш пароль"
              >
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  class="text-gray-500 hover:text-gray-400 focus:outline-none"
                  @click="showPassword = !showPassword"
                >
                  <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                  <EyeOffIcon v-else class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Дополнительные опции -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="form.remember"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-primary-green focus:ring-primary-green border-dark-700 rounded bg-dark-800"
            >
            <label for="remember-me" class="ml-2 block text-sm text-gray-400">
              Запомнить меня
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-primary-green hover:text-primary-purple transition-colors">
              Забыли пароль?
            </a>
          </div>
        </div>

        <!-- Кнопка входа -->
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-purple to-primary-green hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <ArrowRightIcon class="h-5 w-5 text-white group-hover:animate-pulse" />
            </span>
            {{ loading ? 'Вход...' : 'Войти' }}
          </button>
        </div>

        <!-- Ошибки -->
        <div v-if="error" class="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p class="text-sm text-red-400 text-center">{{ error }}</p>
        </div>
      </form>

      <!-- Дополнительная информация -->
      <div class="text-center">
        <p class="text-sm text-gray-500">
          Нет аккаунта?
          <a href="#" class="font-medium text-primary-green hover:text-primary-purple transition-colors">
            Обратитесь к администратору
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  UserIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

// Состояние формы
const form = ref({
  login: '',
  password: '',
  remember: false
})

const showPassword = ref(false)
const loading = ref(false)
const error = ref('')
const router = useRouter()

// Обработка входа
const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    // Здесь будет вызов вашего Laravel API
    // const response = await $fetch('/api/login', {
    //   method: 'POST',
    //   body: form.value
    // })
    
    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Редирект после успешного входа
    router.push('/')
  } catch (err) {
    error.value = 'Неверные учетные данные. Попробуйте еще раз.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Дополнительные стили для плавности */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #1e1e1e inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>