<template>
  <NuxtLink 
    :to="to"
    class="hover:text-primary-green transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-purple hover:after:w-full after:transition-all"
  >
    <slot />
  </NuxtLink>
</template>