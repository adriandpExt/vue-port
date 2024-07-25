import { defineStore } from 'pinia'

export const useStore = defineStore('allStore', () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return { scrollToId }
})
