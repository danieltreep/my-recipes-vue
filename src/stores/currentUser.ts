import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUser', () => {
  const currentUser = ref({})

  return { currentUser }
})