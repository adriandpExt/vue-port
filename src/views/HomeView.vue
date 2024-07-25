<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ id: string }>()
</script>

<template>
  <section :id="id" class="h-screen pt-20 font-theme-retro">
    <div class="grid grid-cols-2">
      <div class="space-y-10">
        <p class="text-5xl">HEY! Im ADRIAN</p>
        <p class="text-3xl">FRONTEND DEVELOPER | SOFTWARE DEVELOPER</p>
        <p class="text-2xl">
          A developer that crafting clean, elegant, and efficient code, ensuring robust and visually
          appealing solutions.
        </p>
      </div>
    </div>
  </section>
</template>
