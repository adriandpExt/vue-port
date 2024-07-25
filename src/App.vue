<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import ContactView from '@/views/ContactView.vue'
import LayouView from '@/layout/LayouView.vue'
</script>

<template>
  <LayouView>
    <HomeView id="home" />
    <AboutView id="about" />
    <WorkView id="works" />
    <ContactView id="contact" />
  </LayouView>
</template>
