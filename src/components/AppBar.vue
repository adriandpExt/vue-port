<script setup lang="ts">
import { useStore } from '@/stores/useStore'

const store = useStore()

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'contact', label: 'Contact' }
]
</script>

<template>
  <nav class="navbar bg-theme-default h-20 fixed">
    <div class="flex justify-between items-center flex-grow">
      <a className="btn btn-ghost text-5xl font-theme-retro">ADRIAN </a>
      <div>
        <button
          v-for="item in menuItems"
          :key="item.id"
          class="btn btn-ghost text-3xl font-theme-retro"
          @click="store.scrollToId(item.id)"
        >
          {{ item.label }}
        </button>
      </div>
      <button className="btn btn-primary text-xl font-theme-retro">Download CV</button>
    </div>
  </nav>
</template>
