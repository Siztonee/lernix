<template>
  <Menu as="div" class="relative">
    <MenuButton class="flex items-center space-x-2">
      <div class="w-9 h-9 rounded-full bg-gradient-to-r from-primary-purple to-primary-green flex items-center justify-center">
        <span class="font-medium">U</span>
      </div>
    </MenuButton>
    
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right bg-dark-700 rounded-md shadow-lg py-1 z-20">
        <MenuItem v-slot="{ active }">
          <a :class="[active ? 'bg-dark-600' : '', 'block px-4 py-2 text-sm']">
            Профиль
          </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a :class="[active ? 'bg-dark-600' : '', 'block px-4 py-2 text-sm']">
            Настройки
          </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a :class="[active ? 'bg-dark-600' : '', 'block px-4 py-2 text-sm text-red-400']">
            Выйти
          </a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const closeMenus = () => {
  isMobileMenuOpen.value = false;
};

</script>