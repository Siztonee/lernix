import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  email: string
}

interface Credentials {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref<boolean>(false)
  const user = ref<User | null>(null)
  
  const login = async (credentials: Credentials): Promise<boolean> => {
    // Вызов API
    const { data, error } = await useFetch<{ user: User }>('/api/login', {
      method: 'POST',
      body: credentials
    })
    
    if (!error.value && data.value) {
      isAuthenticated.value = true
      user.value = data.value.user
      return true
    }
    
    return false
  }
  
  const logout = async (): Promise<void> => {
    await useFetch('/api/logout')
    isAuthenticated.value = false
    user.value = null
  }
  
  return {
    isAuthenticated,
    user,
    login,
    logout
  }
})
