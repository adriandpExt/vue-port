<script setup lang="ts">
import Appbar from '@/components/AppBar.vue'

const date = new Date()
</script>

<template>
  <Appbar />

  <main class="py-10 px-16 bg-theme-default">
    <slot />
  </main>

  <footer class="bg-theme-default h-96 font-theme-retro flex justify-center items-center">
    <p class="text-2xl">&copy; {{ date.getFullYear() }} ADRIAN DEL PRADO</p>
  </footer>
</template>
